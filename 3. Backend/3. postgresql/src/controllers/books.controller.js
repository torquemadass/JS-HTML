import { pool } from "../config/postgres.js";

class BookController {
    getBooks = async (req, res) => {
        const books = await pool.query(`Select * FROM "books"`);
        res.send(books);
  }

    findBook = async (req, res) => {
        try {
            const { id } = req.params;

            //V1
            const book = await pool.query(`SELECT * FROM "books" WHERE "id" = ${id}`)
            
            //V2
            // const bookFound = await pool.query(`
            //     SELECT * FROM "books
            //     WHE`
            //     )
            res.status(200).send(bookFound.rows);

        } catch (error) {
            res.status(500).send("Internal Server Error");
        }
    }
}

export const bookController = new BookController();