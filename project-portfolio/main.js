// main.js
import projects from './projects.mjs'

const searchInput = document.getElementById('search');
const searchButton = document.querySelector('.search-button');
const projectContainer = document.getElementById('project-container');

searchButton.disabled = true;

searchInput.addEventListener('input', () => {
  searchButton.disabled = searchInput.value.trim() === "";
});

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && searchInput.value.trim() !== "") {
    searchButton.click(); // Triggers the same behavior as clicking the button
  }
});


searchButton.addEventListener('click', () => {
    const value = searchInput.value.toLowerCase();
    const results = filterProjects(value);
    renderProjects(results);
  });
  

window.toggleTheme = function () {
  document.body.classList.toggle('dark-mode');
};

// Template
function projectTemplate(project, index) {
  return `
    <section class="project-card" data-index="${index}"> 
<img class="project-image" src="${project.image}" alt="Image of ${project.title}" width="450" height="253" />
      <div class="project-content">
        <h2 class="project-name">${project.title}</h2>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}
        </div>
        ${project.github ? `<a href="${project.github}" target="_blank" class="github-link">View on GitHub</a>` : ''}
      </div>
    </section>`;
}

// Modal logic with fade out
function setupModal(projects) {
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.querySelector('.modal-close');

  const openModal = (project) => {
    modalBody.innerHTML = `
      <h2>${project.title}</h2>
      <img src="${project.image}" alt="${project.title}" style="width:100%; max-height:300px; object-fit:cover; border-radius:10px;" />
      <p>${project.description}</p>
      <p><strong>Tags:</strong> ${project.tags.join(', ')}</p>
      ${project.github ? `<p><a href="${project.github}" target="_blank" class="github-link">View on GitHub</a></p>` : ''}
      ${project.details ? `<div class="project-details">${project.details}</div>` : ''}
    `;
    modal.style.display = 'block';
    requestAnimationFrame(() => modal.classList.add('show'));
  };
  

  const closeModal = () => {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
  };

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const index = card.getAttribute('data-index');
      const project = projects[index];
      openModal(project);
    });
  });

  closeBtn.addEventListener('click', closeModal);
  window.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });
}

// Render & resize
function renderProjects(projectList) {
  const outputElement = document.querySelector('.project-container');
  if (outputElement) {
    outputElement.innerHTML = projectList.map((p, i) => projectTemplate(p, i)).join('');
    handleResize();
    setupModal(projectList);
  }
}

function handleResize() {
  document.querySelectorAll(".project-description").forEach(description => {
    description.classList.toggle('hide', window.innerWidth < 600);
  });
}

// Search filter by form button
function filterProjects(query) {
    return projects
      .filter(project =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query))
      )
      .sort((a, b) => a.title.localeCompare(b.title));
  }
  
// Init
function init() {
  const firstFour = projects.slice(0, 4);
  renderProjects(firstFour);
}

window.addEventListener("resize", handleResize);
window.addEventListener("load", init);
