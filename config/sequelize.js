const { Sequelize } = require("sequelize");
const NoteModel = require("../models/note");

const sequelize = new Sequelize("mynote", "root", null, {
  host: "localhost",
  dialect: "mysql",
});

const db = { sequelize, Sequelize };

db.notes = NoteModel(sequelize, Sequelize);

module.exports = db;
