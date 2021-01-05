// require("dotenv").config();
// const connection = require("mysql").createConnection({
//   host: process.env.MYSQL_HOST || "",
//   user: process.env.MYSQL_USER || "",
//   password: process.env.MYSQL_PASS || "",
//   database: process.env.MYSQL_DB || "",
// });

// const connect = () => {
//   connection.connect((err) => {
//     if (err) return console.error("Could not connect to MySql");
//     console.log("Connected to MySql...");
//     connection.query("CREATE DATABASE mynote", (err, result) => {
//       if (err) return console.error(err);
//       console.log("mynote DB created!");
//     });
//     connection.query(
//       "CREATE TABLE notes (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(50), text VARCHAR(255))",
//       (err, result) => {
//         if (err) return console.error(err);
//         console.log(
//           "Connected to MySql--> mynote DB created!--> notes table created!"
//         );
//       }
//     );
//   });
// };

// module.exports = { connect, connection };
