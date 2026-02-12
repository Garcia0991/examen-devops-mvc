let estudiantes = [];

const obtenerEstudiantes = () => {
  return estudiantes;
};

const agregarEstudiante = (estudiante) => {
  estudiantes.push(estudiante);
};

const existeEstudiante = (id) => {
  return estudiantes.some(est => est.id === id);
};
const eliminarEstudiante = (id) => {
  estudiantes = estudiantes.filter(est => est.id !== id);
};

module.exports = {
  obtenerEstudiantes,
  agregarEstudiante,
  existeEstudiante,
  eliminarEstudiante

};



