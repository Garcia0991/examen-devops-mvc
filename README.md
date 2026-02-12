# API Estudiantes - DevOps MVC

## 📌 Descripción del Proyecto

Este proyecto consiste en el desarrollo de una API REST utilizando Node.js y Express, siguiendo el patrón de arquitectura MVC (Modelo - Vista - Controlador).

La API permite registrar y consultar estudiantes con persistencia en memoria.

La entidad **Estudiante** contiene estrictamente los siguientes campos:

- id (único)
- nombre
- carrera

---

## 🚀 Endpoints Implementados

### POST /estudiantes

Permite registrar un nuevo estudiante.

Ejemplo de JSON:

{
  "id": "1",
  "nombre": "Juan",
  "carrera": "Ingeniería"
}

Respuestas posibles:

- 201 Created → Estudiante creado correctamente
- 400 Bad Request → Si el ID ya existe o faltan datos

---

### GET /estudiantes

Retorna la lista completa de estudiantes registrados.

Respuesta:

- 200 OK

---

## 🏗 Arquitectura MVC

El proyecto está organizado de la siguiente manera:

- models/ → Manejo de datos en memoria
- controllers/ → Lógica de negocio
- routes/ → Definición de endpoints
- index.js → Punto de entrada del servidor

Esta separación garantiza una arquitectura limpia y mantenible.

---

## ⚙️ Instrucciones de Ejecución

1️⃣ Clonar el repositorio:
git clone https://github.com/Garcia0991/examen-devops-mvc.git

2️⃣ Instalar dependencias:
npm install

3️⃣ Ejecutar el servidor:
node index.js

El servidor se ejecuta en:

http://localhost:3000

---

## 🔀 Estrategia de Gestión de Versiones

Se utilizó la estrategia **Trunk-Based Development**.

- Se crearon ramas feature/*
- Las funcionalidades fueron integradas a main mediante Pull Requests
- No se realizaron pushes directos a la rama principal

Esto permite mantener estabilidad en la rama principal y aplicar buenas prácticas DevOps.

---

## 🤖 Pipeline de Integración Continua (GitHub Actions)

Se configuró un workflow en GitHub Actions que se ejecuta automáticamente en:

- Push
- Pull Request

El pipeline realiza:

1. Instalación de dependencias
2. Verificación de ejecución del proyecto
3. Creación automática de Release al hacer merge a main

La generación automática de releases demuestra la implementación de automatización CI/CD.

