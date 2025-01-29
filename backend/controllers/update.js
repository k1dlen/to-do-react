import { connection } from "../connectDB.js";



export function update(req, res) {
    const completed = req.body.completed;
    const id = req.body.id;
    const task = [completed, id]
    console.log(task);

    const sql_update = "UPDATE tasks SET completed=? WHERE id=?";
    connection.query(sql_update, task,
        function (err, results) {
            if (err) console.log(err);
            else console.log("Данные обновлены");
        })
};