import mysql from "mysql2";

export const connection = mysql.createConnection({
    host: "172.17.1.8",
    user: "root",
    database: "todolist_slo",
    password: "1234"
});

    connection.connect(function (err) {
        if (err) {
            return console.error("Ошибка: " + err.message);
        }
        else {
            console.log("Подключение к серверу MySQL успешно установлено");
        }
    })