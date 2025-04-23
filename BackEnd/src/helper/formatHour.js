
// export function formatHour (date) {
//     const hour = new Date(date)
//     const opciones = {
//         hour: '2-digit',
//         minute: '2-digit',
//         hour12: false, // Usa formato 24h
//       };
//       try {
//         const hourformated = new Intl.DateTimeFormat('es-ES', opciones).format(hour);
//         return hourformated
//       } catch (error) {
//         console.error('❌ Error al formatear la fecha:', error);
//         return date; // devuélvelo sin formatear si hay un error
//       }
   
// }

export function formatHour(datetimeString) {
  try {
    // Extrae solo la parte de hora y minutos
    const hora = datetimeString.slice(11, 16); // "08:47"
    return hora;
  } catch (error) {
    console.error('❌ Error al extraer la hora:', error);
    return datetimeString;
  }
}