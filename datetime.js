function updateDateTime() {
    const now = new Date();

    const dateOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZoneName: 'short'
    };

    const formattedDate = now.toLocaleString(undefined, dateOptions);

    const time24h = now.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });

    document.getElementById('date-time').textContent = `Today is ${formattedDate} | ${time24h}`;
}

// Initial call
updateDateTime();

// Update every second
 setInterval(updateDateTime, 1000);