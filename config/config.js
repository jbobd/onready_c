//seteo el puerto en un módulo aparte para cambiarlo más fácilmente en el futuro si se quiere

//hago este OR para que al deployar en producción tome la var de entorno
const PORT = process.env.PORT || 5000;

module.exports = PORT;