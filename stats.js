const stats = [
    { label: 'LOOKS', value: 100, color: 'bg-success' },
    { label: 'CODING SKILLS', value: 80, color: 'bg-warning' },
    { label: 'ENERGY', value: 35, color: 'bg-danger' }
];

const statsContainer = document.getElementById('stats-section');

  const heading = document.createElement('h3');
  heading.className = 'text-orange';
  heading.style.fontFamily = "'Press Start 2P'";
  heading.textContent = 'CURRENT STATS';
  statsContainer.appendChild(heading);

  stats.forEach(stat => {
    const statLabel = document.createElement('h5');
    statLabel.style.marginTop = '2rem';
    statLabel.style.fontFamily = "'Press Start 2P'";
    statLabel.textContent = stat.label;
    statsContainer.appendChild(statLabel);

    const progressWrapper = document.createElement('div');
    progressWrapper.className = 'progress';
    progressWrapper.setAttribute('role', 'progressbar');
    progressWrapper.setAttribute('aria-label', 'Basic example');
    progressWrapper.style.height = '40px';

    const progressBar = document.createElement('div');
    progressBar.className = `progress-bar ${stat.color} text-white progress-bar-striped progress-bar-animated`;
    progressBar.style.width = `${stat.value}%`;
    progressBar.innerHTML = `<b>${stat.value}%</b>`;

    progressWrapper.appendChild(progressBar);
    statsContainer.appendChild(progressWrapper);
});