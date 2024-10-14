import { pool } from "../config/postgres.js";

class OrderController {
    addOrder = async (req, res) => {
        const { id } = req.params;
        const { products } = req.body;

        try {
            const { rows: [user] } = await pool.query(
                `SELECT * FROM "Users" WHERE user_id = $1`, 
                [id]
            );
            if (!user) return res.status(404).json({ error: 'User not found' });

            const date = new Date().toLocaleDateString('sv-SE');

            const productChecks = await Promise.all(products.map(async (e) => {
                const { rows: [product] } = await pool.query(
                    `SELECT * FROM "Products" WHERE product_id = $1`,
                    [e.product_id]
                );
                return product ? true : false;
            }));

            if (productChecks.includes(false)) return res.status(404).json({ error: 'One or more products not found' });

            await pool.query('BEGIN');

            const { rows: [newOrder] } = await pool.query(
                `INSERT INTO "Orders" (user_id, order_date) VALUES ($1, $2) RETURNING order_id`,
                [id, date]
            );

            const insertItems = products.map(e => {
                return `(${newOrder.order_id}, ${e.product_id}, ${e.quantity})`;
            }).join(", ");

            await pool.query(
                `INSERT INTO "Order_Items" (order_id, product_id, quantity) VALUES ${insertItems}`
            );

            await pool.query('COMMIT');
            res.status(201).json(newOrder);
        } catch (error) {
            await pool.query('ROLLBACK');
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    // Get products by user ID
    getUserProducts = async (req, res) => {
        const { id } = req.params;
        try {
            const products = await pool.query(`
                SELECT u.username, o.order_id, p.product_name, p.price, oi.quantity
                FROM "Users" u
                JOIN "Orders" o ON u.user_id = o.user_id
                JOIN "Order_Items" oi ON o.order_id = oi.order_id
                JOIN "Products" p ON oi.product_id = p.product_id
                WHERE u.user_id = $1`, 
                [id]
            );

            res.status(200).json(products.rows);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    };
}

export const orderController = new OrderController();