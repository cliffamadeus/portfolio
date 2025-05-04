const stats = [
    { label: 'LOOKS', value: 100, color: 'bg-success' },
    { label: 'CODING SKILLS', value: 80, color: 'bg-warning' },
    { label: 'ENERGY', value: 15, color: 'bg-danger' }
  ];
  
  const statsContainer = document.getElementById('stats-section');
  
  statsContainer.innerHTML = `
    <h3 class="text-orange" style="font-family: 'Press Start 2P';">CURRENT STATS</h3>
    ${stats.map(stat => `
      <h5 style="margin-top: 2rem; font-family: 'Press Start 2P';">${stat.label}</h5>
      <div class="progress" role="progressbar" aria-label="Basic example" style="height: 40px;">
        <div class="progress-bar ${stat.color} text-white progress-bar-striped progress-bar-animated" style="width: ${stat.value}%;">
          <b style="font-size:23px; font-family: 'Press Start 2P';color:#212529;">${stat.value}%</b>
        </div>
      </div>
    `).join('')}
  `;
  