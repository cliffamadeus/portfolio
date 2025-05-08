document.addEventListener("DOMContentLoaded", () => {
    const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");
  
    navbarLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navbarCollapse.classList.contains("show")) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: true,
          });
        }
      });
    });
  });
  
  const educationData = [
          { level: "Graduate School", institution: "Mindanao State University - Iligan Institute of Technology (MSCA)", duration: "Ongoing" },
          { level: "Tertiary School", institution: "Central Mindanao University (BSIT)", duration: "Class of 2019" },
          { level: "Secondary School", institution: "Central Mindanao University Laboratory High School", duration: "Class of 2013" },
          { level: "Primary School", institution: "Musuan Elementary School", duration: "Class of 2009" }
  ];
  
      const educationContainer = document.getElementById("education");
      
      let educationHTML = `
          <div class="vertical-line-left full-screen">
              <div style="margin-left: 2rem;">
                  <div class="container py-3">
                      <h4 class="text-mint-green text-center" style="font-family: 'Press Start 2P';">EDUCATION</h4>
                      <div class="row"
                           style="margin-top:5vh;">
                          ${educationData.map(item => `
                              <div class="col-12">
                                  <p><b class="text-mint-green">${item.level}</b><i> | ${item.institution} - ${item.duration}</i></p>
                              </div>
                          `).join('')}
                      </div>
                  </div>
              </div>
          </div>`;
      
  educationContainer.innerHTML = educationHTML;
  
  document.addEventListener("DOMContentLoaded", function () {
    const workExperienceData = [
        { title: "IT Consultant", company: "Central Mindanao University - Office of Alumni Relations", start: "November 2024", end: "Present" },
        { title: "Instructor", company: "Northern Bukidnon State College", start: "August 2022", end: "Present" },
        { title: "IT Staff", company: "CMU - Alumni Relations and Linkages Office", start: "June 2019", end: "July 2022" },
        { title: "Mobile Developer", company: "NexusGrid", start: "June 2018", end: "December 2018" },
        { title: "Game Asset Developer", company: "PixelBit Studios", start: "October 2017", end: "March 2018" },
        { title: "On the Job Training", company: "Next BPO Solutions", start: "Jan 2017", end: "May 2017" }
    ];

    const workExperienceContainer = document.getElementById("work-experience");

    // Helper function to convert a string like "November 2024" to a valid Date object
    function parseDate(dateString) {
        const [month, year] = dateString.split(" ");
        const monthIndex = new Date(`${month} 1, 2020`).getMonth(); // Get month index
        return new Date(year, monthIndex);
    }

    // Function to calculate the duration between two dates
    function calculateDuration(start, end) {
        const startDate = parseDate(start);
        let endDate = end.toLowerCase() === "present" ? new Date() : parseDate(end);

        // Calculate the difference in months
        let years = endDate.getFullYear() - startDate.getFullYear();
        let months = endDate.getMonth() - startDate.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }

        return `${years} years ${months} months`;
    }

    // Create HTML for work experience with the duration
    let workExperienceHTML = `
        <div class="vertical-line-right full-screen">
            <div class="container py-3">
                <p class="text-mint-green fs-4 text-center" style="font-family: 'Press Start 2P';">WORK EXPERIENCE</p>
                <div class="row" style="margin-top:5vh;">
                    ${workExperienceData.map(item => `
                        <div class="col-12">
                            <p>
                            <b class="text-mint-green">${item.title}</b> | 
                            <i>${item.company} (${item.start} - ${item.end})</i>
                            <b class="text-mint-green">(${calculateDuration(item.start, item.end)})</b>
                            </p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>`;

    // Set the generated HTML to the container
    workExperienceContainer.innerHTML = workExperienceHTML;
});


  
  document.addEventListener("DOMContentLoaded", function () {
      const projectsData = [
          {
              title: "Project Kalasan",
              company: "Northern Bukidnon State College",
              duration: "August 2023 - Present",
              description: "An environmental project for mapping tree species using EXIF Metadata",
              icons: ["code-slash-outline", "map-outline", "leaf-outline", "analytics-outline"],
              githubLink: "https://github.com/cliffamadeus/project-kalasan"
          },
          {
              title: "EXIF Processor",
              company: "Northern Bukidnon State College",
              duration: "July 2024 - Present",
              description: "Processes image metadata for geotagging and cataloging.",
              icons: ["code-slash-outline", "image-outline", "camera-outline"],
              githubLink: "https://cliffamadeus.github.io/exif-app/"
          },
          {
              title: "Wildlife Search",
              company: "Personal Project",
              duration: "January 2025 - Present",
              description: "A project that uses iNaturalist API to plot observed Flora and Fauna from the platform",
              icons: ["code-slash-outline", "map-outline","paw-outline","fish-outline", "leaf-outline","flower-outline"],
              githubLink: "https://cliffamadeus.github.io/wildlife-search/"
          },
          {
              title: "CMU ARLO IS",
              company: "Central Mindanao University",
              duration: "June 2019 - Present",
              description: "Integrated system for ARLO at CMU including GIS and alumni tracking.",
              icons: ["code-slash-outline", "people-outline", "map-outline"],
              githubLink: ""
          },
          {
              title: "CMU Wayfinding",
              company: "Central Mindanao University",
              duration: "June 2016 - Present",
              description: "An interactive campus map of Central Mindanao University",
              icons: ["code-slash-outline", "map-outline"],
              githubLink: "https://cliffamadeus.github.io/cmu-wayfinding/"
          },
      ];
  
      const iconDescriptions = {
          "code-slash-outline": "Software Development",
          "map-outline": "Geolocation or Mapping",
          "leaf-outline": "Environmental or Sustainability",
          "analytics-outline": "Data Analysis or Monitoring",
          "image-outline": "Image Processing",
          "camera-outline": "Camera Integration",
          "people-outline": "User or Community Engagement"
      };
  
      const projectsContainer = document.getElementById("projects");
  
      let projectsHTML = `
      <div class="vertical-line-left full-screen">
          <div class="container py-3">
              <p class="text-mint-green fs-4 text-center responsive-margin" style="font-family: 'Press Start 2P';">
                  PROJECTS
              </p>
              <div class="row" style="margin-top:5vh;">
                  ${projectsData.map((item, index) => `
                      <div class="col-12 mb-3">
                          <div class="d-flex flex-wrap align-items-center gap-2 project-item" data-index="${index}" style="cursor:pointer;">
                              <b class="text-mint-green me-2">${item.title}</b>
                              |<i class="me-2"> ${item.company} - ${item.duration}</i>  |
                              <div class="class="d-flex flex-wrap justify-content-center align-items-center gap-2 project-item">
                                ${item.icons.map(icon => `
                                  <ion-icon 
                                      name="${icon}" 
                                      title="${iconDescriptions[icon] || 'Feature'}"
                                      style="font-size: 30px;" 
                                      class="text-mint-green"
                                  ></ion-icon>
                                `).join('')}
                              </div>
                             
                              <a href="${item.githubLink}" target="_blank">
                                  <ion-icon name="logo-github" style="font-size: 30px;" class="text-dark"></ion-icon>
                              </a>
                          </div>
                      </div>
                  `).join('')}
              </div>
          </div>
      </div>`;
  
      projectsContainer.innerHTML = projectsHTML;
  
      // Add click listeners to each project item
      document.querySelectorAll('.project-item').forEach(el => {
          el.addEventListener('click', function () {
              const index = this.getAttribute('data-index');
              const project = projectsData[index];
  
              document.getElementById('projectModalLabel').innerText = project.title;
              document.getElementById('projectModalDetails').innerText = `${project.company} | ${project.duration}\n\n${project.description}`;
              document.getElementById('projectModalIcons').innerHTML = project.icons.map(icon => `
                  <ion-icon 
                      name="${icon}" 
                      title="${iconDescriptions[icon] || 'Feature'}" 
                      style="font-size: 30px;" 
                      class="text-pixel-green"
                  ></ion-icon>
              `).join('');
              // Add GitHub link to the modal
              document.getElementById('projectModalDetails').innerHTML += `<br><a href="${project.githubLink}" target="_blank">View on GitHub</a>`;
  
              const modal = new bootstrap.Modal(document.getElementById('projectModal'));
              modal.show();
          });
      });
  });
  