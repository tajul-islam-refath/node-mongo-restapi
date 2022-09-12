const router = require("express").Router();

const {
  getStudents,
  createStudents,
} = require("../controllers/student.controller");

const { studentValidation } = require("../middleware/student.middleware");

router.get("/get", getStudents);
router.post("/create", studentValidation, createStudents);

module.exports = router;
