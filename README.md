# 🎓 UIDE Loja - Portal Informativo y Simulador (Sistemas / TICs)

Este es un proyecto web estático interactivo diseñado para la **Carrera de Ingeniería en Sistemas de Información (Tecnologías de la Información)** de la **Universidad Internacional del Ecuador (UIDE), Sede Loja**.

El portal tiene un enfoque educativo y está optimizado con un diseño de **alto contraste** para ser proyectado en aulas de clase o auditorios sin perder legibilidad.

---

## 🎯 ¿Para qué sirve esta Aplicación?

El objetivo principal de la aplicación es servir como un recurso de demostración interactivo para el público general, futuros estudiantes y padres de familia interesados en la carrera de TICs. Incluye:

1. **📋 Información de la Carrera**: Resumen del perfil profesional de la carrera, duración, modalidad y datos físicos/contacto de la sede en Loja (sector Jipiro).
2. **💰 Simulador de Becas Interactivo**: Permite calcular de manera dinámica el porcentaje estimado de beca arancelaria basándose en el promedio de bachillerato y la situación socioeconómica, mostrando el valor proyectado del semestre frente al valor normal.
3. **✏️ Test Vocacional Express**: Un cuestionario corto de 4 preguntas de opción múltiple para evaluar la afinidad del usuario con el área de programación, lógica e innovación tecnológica.
4. **📚 Estructura de Materias**: Un desglose interactivo de lo que aprenderá el estudiante a lo largo de los semestres.

---

## 🛠️ Tecnologías Utilizadas

* **React** (v19) - Biblioteca de JavaScript para construir interfaces de usuario.
* **Vite** (v8) - Herramienta de compilación ultrarrápida para desarrollo frontend.
* **Vanilla CSS** - Estilos personalizados estructurados con variables HSL para máxima visibilidad en proyectores.

---

## ⚡ Guía de Instalación y Ejecución Local

Sigue estos pasos para levantar el entorno de desarrollo en tu computadora local:

### 1. Clonar el repositorio
```bash
git clone https://github.com/richardmijo/front_prueba.git
cd front_prueba
```

### 2. Instalar las dependencias
Asegúrate de tener [Node.js](https://nodejs.org/) instalado y luego ejecuta:
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
Para correr la aplicación de forma local:
```bash
npm run dev
```
La aplicación estará disponible en la URL: **[http://localhost:5173](http://localhost:5173)**

---

## 🚀 Preparación para Producción y Despliegue

Dado que es una aplicación puramente frontend, para subirla a un servidor web de producción (por ejemplo, a tu hosting o servidor en Digital Ocean) debes generar los archivos estáticos listos para producción:

1. Ejecuta el comando de compilación:
   ```bash
   npm run build
   ```
2. Este comando creará un directorio llamado `dist/` en la raíz del proyecto.
3. Sube únicamente el contenido de la carpeta `dist/` a tu servidor Nginx, Apache o servicio de hosting estático.
