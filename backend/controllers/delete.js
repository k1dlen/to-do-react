import { connection } from "../connectDB.js";

export function sql_delete(req, res) {
    const id = req.params.id;
    console.log(id);

    const sql_del = "DELETE FROM tasks WHERE id = ?";

    connection.query(sql_del, id, 
        function (err, results) {
        if (err) console.log(err);
        else console.log("Данные удалены");
    });
};