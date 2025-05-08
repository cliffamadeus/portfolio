const stats = [
    { label: 'LOOKS', value: 100, color: 'bg-success' },
    { label: 'ADRENALINE', value: 100, color: 'bg-success' },
    { label: 'CODING SKILLS', value: 80, color: 'bg-warning' },
    { label: 'ENERGY', value: 15, color: 'bg-danger' }
  ];
  
  const statsContainer = document.getElementById('stats-section');
  
  statsContainer.innerHTML = `
    <h3 class="text-mint-green" style="font-family: 'Press Start 2P';">CURRENT STATS</h3>
    ${stats.map(stat => `
      <h5 style="margin-top: 2rem; font-family: 'Press Start 2P';">${stat.label}</h5>
      <div class="progress" role="progressbar" aria-label="Basic example" style="height: 40px;">
        <div class="progress-bar ${stat.color} text-white progress-bar-striped progress-bar-animated" style="width: ${stat.value}%;">
          <b style="font-size:23px; font-family: 'Press Start 2P';color:#212529;">${stat.value}%</b>
        </div>
      </div>
    `).join('')}
  `;

  const techUsed = [
    {
      name: 'Code',
      icon: 'code-slash-outline',
      color: '#ffb006',
      description: 'I code generally for FUN'
    },
    {
      name: 'Ionic',
      icon: 'logo-ionic',
      color: '#61dbfb',
      description: 'Mobile-first UI toolkit for building hybrid apps.'
    },
    {
      name: 'React',
      icon: 'logo-react',
      color: '#61dbfb',
      description: 'JavaScript library for building interactive UIs.'
    },
    {
      name: 'Node.js',
      icon: 'logo-nodejs',
      color: '#3c873a',
      description: 'Backend runtime built on Chrome’s V8 engine.'
    }
];
  
const container = document.getElementById('tech-badges');
container.innerHTML = techUsed.map((tech, index) => `
  <div class="badge-tooltip d-inline-block mx-2" title="${tech.description}">
    <ion-icon 
      name="${tech.icon}" 
      style="color: ${tech.color}; font-size: 35px; cursor: pointer;" 
      data-bs-toggle="modal" 
      data-bs-target="#techModal" 
      onclick="populateModal(${index})"
    ></ion-icon>
  </div>
`).join('');

function populateModal(index) {
    const tech = techUsed[index];
    document.getElementById('techModalLabel').textContent = tech.name;
    document.getElementById('techModalBody').textContent = tech.description;
}