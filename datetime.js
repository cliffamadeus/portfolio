const dateTimeElement = document.getElementById('date-time');
    
    // Get the current date and time
    const now = new Date();

    // Format options
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZoneName: 'short'
    };

    // Format the date using locale
    const formattedDate = now.toLocaleString(undefined, options);

    // Display in the h2
    dateTimeElement.textContent = `Today is ${formattedDate}`;