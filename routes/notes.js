const router = require("express").Router();
const {
  getAll,
  getNoteById,
  updateNote,
  deleteNote,
  createNote,
} = require("../controllers/notesControl");

router.get("/", getAll);

router.post("/", createNote);

router.get("/:id", getNoteById);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

module.exports = router;
