const express = require("express");
const router = express.Router();
const estudianteController = require("../controllers/estudianteController");

router.get("/", estudianteController.listarEstudiantes);
router.post("/", estudianteController.registrarEstudiante);
router.put("/:id", estudianteController.actualizarEstudiante);

module.exports = router;
