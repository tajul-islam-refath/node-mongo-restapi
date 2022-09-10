const router = require("express").Router();

const {
  getStudents,
  createStudents,
} = require("../controllers/student.controller");

router.get("/get", getStudents);
router.post("/create", createStudents);

module.exports = router;
