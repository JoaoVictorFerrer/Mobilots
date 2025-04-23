
export function formatHour(datetimeString) {
  try {
    const hora = datetimeString.slice(11, 16);
    return hora;
  } catch (error) {
    console.error('❌ Error al extraer la hora:', error);
    return datetimeString;
  }
}