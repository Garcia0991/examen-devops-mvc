const estudianteModel = require("../models/estudianteModel");

const listarEstudiantes = (req, res) => {
  const estudiantes = estudianteModel.obtenerEstudiantes();
  res.status(200).json(estudiantes);
};

const registrarEstudiante = (req, res) => {
  const { id, nombre, carrera } = req.body;

  if (!id || !nombre || !carrera) {
    return res.status(400).json({ mensaje: "Todos los campos son obligatorios" });
  }

  if (estudianteModel.existeEstudiante(id)) {
    return res.status(400).json({ mensaje: "El estudiante ya existe" });
  }

  estudianteModel.agregarEstudiante({ id, nombre, carrera });

  res.status(201).json({ mensaje: "Estudiante registrado correctamente" });
};

module.exports = {
  listarEstudiantes,
  registrarEstudiante
};
