// const notesDB = require("../config/connectDB").connection;
const db = require("../config/sequelize");
const Note = db.notes;

const getAll = (req, res) => {
  Note.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes.",
      });
    });
  //   notesDB.query("SELECT * FROM notes", (err, result) => {
  //     if (err) throw err;
  //     return result;
  //   });
};

const getNoteById = (req, res) => {
  const id = req.params.id;
  Note.findByPk(id)
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        message: err.message || `Error retrieving Note with id = ${id}`,
      })
    );

  //   notesDB.query(`SELECT * FROM notes WHERE id = '${id}'`, (err, result) => {
  //     if (err) throw err;
  //     return result;
  //   });
};

const createNote = (req, res) => {
  const note = { title: req.body.title, text: req.body.text };
  Note.create(note)
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        message:
          err.message || "Some error occurred while trying to create note.",
      })
    );

  //   notesDB.query(
  //     `INSERT INTO notes (title, text) VALUES ('${title}', '${text}')`,
  //     (err, result) => {
  //       if (err) throw err;
  //       return result;
  //     }
  //   );
};

const updateNote = (req, res) => {
  const id = req.params.id;
  Note.update(req.body, {
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Note was updated successfully.",
        });
      } else {
        res.status(400).send({
          message: `Cannot update Note with id=${id}. Maybe Note was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Note with id=" + id,
      });
    });
  //   notesDB.query(
  //     `UPDATE notes SET title='${title}', text='${text}' WHERE id='${id}'`,
  //     (err, result) => {
  //       if (err) throw err;
  //       return result;
  //     }
  //   );
};

const deleteNote = (req, res) => {
  const id = req.params.id;
  Note.destroy({
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Note was deleted successfully!",
        });
      } else {
        res.status(400).send({
          message: `Cannot delete Note with id=${id}. Maybe Note was not found`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id,
      });
    }); //   notesDB.query(`DELETE FROM notes WHERE id='${id}'`, (err, result) => {
  //     if (err) throw err;
  //     return result;
  //   });
};

module.exports = {
  getAll,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
};
