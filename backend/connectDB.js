import mysql from "mysql2";

export const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "todo_db",
  password: "Lenya1590.",
});

connection.connect(function (err) {
  if (err) {
    return console.error("Ошибка: " + err.message);
  } else {
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});
