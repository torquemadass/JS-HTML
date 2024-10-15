import { pool } from "../config/postgres.js";

class ProductController {
    // Create a new product
    addProduct = async (req, res) => {
        const { product_name, price } = req.body;

        if (!product_name || !price) {
            return res.status(400).json({
                error: `Request Failed: "product_name" or "price" may be missing`
            });
        }

        try {
            const { rows } = await pool.query(
                `INSERT INTO "Products" (product_name, price) VALUES ($1, $2) RETURNING *`,
                [product_name, price]
            );
            res.status(201).json(rows[0]);

        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    };

    // Update a product by ID
    updateProduct = async (req, res) => {
        const { id } = req.params;
        const { product_name, price } = req.body;

        if (!id) return res.status(400).json({error: "product_id is missing"});
        if (!product_name) return res.status(400).json({error: "product_name is missing"});
        if (!price) return res.status(400).json({error: "price is missing"});

        try {
            const { rowCount } = await pool.query(
                `UPDATE "Products" SET product_name = $1, price = $2 WHERE product_id = $3`,
                [product_name, price, id]
            );

            if (rowCount === 0) {
                return res.status(404).json({ error: "Product not found" });
            }

            res.status(200).json({ product_name, price });

        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    };

    // Delete a product by ID
    deleteProduct = async (req, res) => {
        const { id } = req.params;

        if (!id) return res.status(400).json({error: "product_id is missing"});

        try {
            const { rowCount } = await pool.query(
                `DELETE FROM "Products" WHERE product_id = $1`,
                [id]
            );

            if (rowCount === 0) {
                return res.status(404).json({ error: "Product not found" });
            }

            res.status(200).json(`Product deleted with ID: ${id}`);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    };

    // Get all products
    getProducts = async (req, res) => {
        try {
            const { rows: products } = await pool.query(`SELECT * FROM "Products"`);
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    };
}

export const productController = new ProductController();