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
const actualizarEstudiante = (req, res) => {
  const { id } = req.params;
  const { nombre, carrera } = req.body;

  const estudiantes = estudianteModel.obtenerEstudiantes();
  const estudiante = estudiantes.find(est => est.id === id);

  if (!estudiante) {
    return res.status(404).json({ mensaje: "Estudiante no encontrado" });
  }

  if (nombre) estudiante.nombre = nombre;
  if (carrera) estudiante.carrera = carrera;

  res.status(200).json({ mensaje: "Estudiante actualizado correctamente" });
};

module.exports = {
  listarEstudiantes,
  registrarEstudiante,
  actualizarEstudiante

};
