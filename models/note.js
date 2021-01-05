module.exports = (sequelize, Sequelize) => {
  const Note = sequelize.define("note", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: { type: Sequelize.STRING, allowNull: false },
    text: Sequelize.STRING,
  });
  return Note;
};
