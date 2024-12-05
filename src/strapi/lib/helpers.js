export function formatDateToLocale(date) {
  const data = new Date(date);

  // Tablica z nazwami miesięcy
  const months = [
    "stycznia",
    "lutego",
    "marca",
    "kwietnia",
    "maja",
    "czerwca",
    "lipca",
    "sierpnia",
    "września",
    "października",
    "listopada",
    "grudnia",
  ];

  const day = data.getDate();
  const month = data.getMonth();
  const year = data.getFullYear();

  const formatDate = `${day} ${months[month]} ${year}`;

  return formatDate;
}

export function getHoursAndMinutes(date) {
  const data = new Date(date);

  // Opcje formatowania daty i czasu dla Polski
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Europe/Warsaw",
  };

  // Formatowanie daty zgodnie z ustawieniami dla Polski
  const formatTime = data.toLocaleString("pl-PL", options);

  return formatTime;
}
