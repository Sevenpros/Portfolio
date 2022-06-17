const showMenuBtn = document.querySelector('#show-menu');
const mobileMenu = document.querySelector('.nav-bar-mobile');
const navBar = document.querySelector('.nav-bar');
const cancelMenuBtn = document.querySelector('#cancel-menu');
const menuList = document.querySelectorAll('.menu-list');
const projectSection = document.querySelector('.projects');

showMenuBtn.addEventListener('click', () => {
  navBar.classList.toggle('invisible');
  mobileMenu.classList.toggle('invisible');
});
cancelMenuBtn.addEventListener('click', () => {
  navBar.classList.toggle('invisible');
  mobileMenu.classList.toggle('invisible');
});
menuList.forEach((list) => {
  list.addEventListener('click', () => {
    navBar.classList.toggle('invisible');
    mobileMenu.classList.toggle('invisible');
  });
});
function createProject(name, description, image, technologies, liveLink, sourceLink) {
  const project = {
    name,
    description,
    image,
    technologies,
    liveLink,
    sourceLink,
  };
  return project;
}
const projects = [
  createProject('Multi Post Stories',
    ` when an unknown printer took a galley of type and scrambled it 1960s with the 
    releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with 
    the releax map lapora verita.`,
    'images/project1.png',
    'HTML,CSS, JAVASCRIPT',
    'index.html',
    'index.html'),
  createProject('Portfolio',
    ` when an unknown printer took a galley of type and scrambled it 1960s with the 
    releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with 
    the releax map lapora verita.`,
    'images/project1.png',
    'HTML,CSS, JAVASCRIPT',
    'index.html',
    'index.html'),
  createProject('Mobile App',
    ` when an unknown printer took a galley of type and scrambled it 1960s with the 
    releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with 
    the releax map lapora verita.`,
    'images/project1.png',
    'XML,CSS, JAVASCRIPT',
    'index.html',
    'index.html'),
  createProject('Web Projectg',
    ` when an unknown printer took a galley of type and scrambled it 1960s with the 
    releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with 
    the releax map lapora verita.`,
    'images/project1.png',
    'XML,CSS, JAVASCRIPT',
    'index.html',
    'index.html'),
  createProject('Best Mobile App',
    ` when an unknown printer took a galley of type and scrambled it 1960s with the 
    releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with 
    the releax map lapora verita.`,
    'images/project1.png',
    'XML,CSS, JAVASCRIPT',
    'index.html',
    'index.html'),
  createProject('New Web App',
    ` when an unknown printer took a galley of type and scrambled it 1960s with the 
    releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with 
    the releax map lapora verita.`,
    'images/project1.png',
    'XML,CSS, JAVASCRIPT',
    'index.html',
    'index.html'),
  createProject('M-Finance App',
    ` when an unknown printer took a galley of type and scrambled it 1960s with the 
    releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with 
    the releax map lapora verita.`,
    'images/project1.png',
    'XML,CSS, JAVASCRIPT',
    'index.html',
    'index.html'),
];

function getProjectByName(name) {
  const project = projects.filter((pro) => pro.name === name);
  return project[0];
}

function fillHeader() {
  const header = document.createElement('header');
  header.classList.add('project-header');
  const projectTitle = document.createElement('h2');
  projectTitle.classList.add('"projects-section-title');
  projectTitle.textContent = 'My Recent Works';
  const line = document.createElement('div');
  line.classList.add('line');
  header.appendChild(projectTitle);
  header.appendChild(line);
  projectSection.appendChild(header);
}

function fillProject() {
  const gridContainer = document.createElement('div');
  gridContainer.classList.add('grid-container');

  for (let i = 0; i < projects.length; i += 1) {
    const projectTechnologies = projects[i].technologies.split(',');
    if (i === 0) {
      const projectCard = document.createElement('article');
      projectCard.classList.add('project-card');
      const projectImage = document.createElement('div');
      projectImage.classList.add('project-image');
      projectImage.innerHTML = `<img alt="image illustrating project" src="${projects[i].image}">`;
      const projectDescription = document.createElement('div');
      const techList = document.createElement('ul');
      const projectBtn = document.createElement('button');
      projectBtn.classList.add('project-button');
      projectBtn.textContent = 'See Project';
      projectBtn.id = `${projects[i].name}`;
      techList.classList.add('project-tech');
      projectDescription.classList.add('desc');
      projectDescription.innerHTML = `
      <div class="project-desc">
          <h3 class="desc-title">${projects[i].name}</h3>
          <p class="description">${projects[i].description}</p>
      </div>`;

      projectTechnologies.forEach((tech) => {
        const list = document.createElement('li');
        list.innerHTML = `<li><a href="#">${tech}</a></li>`;
        techList.appendChild(list);
      });
      projectCard.appendChild(projectImage);
      projectDescription.appendChild(techList);
      projectDescription.appendChild(projectBtn);
      projectCard.appendChild(projectDescription);
      projectSection.appendChild(projectCard);
      projectSection.appendChild(gridContainer);
    } else if (i > 0) {
      const projectArticle = document.createElement('article');
      projectArticle.classList.add('project-card');
      projectArticle.classList.add('mobile-card');
      const transparent = document.createElement('div');
      transparent.classList.add('transparent');
      const projectDesc = document.createElement('div');
      projectDesc.classList.add('project-desc');
      projectDesc.classList.add('mobile-desc');
      const techLists = document.createElement('ul');
      const projectBtns = document.createElement('button');
      techLists.classList.add('project-tech');
      techLists.classList.add('mobile-tech');
      projectBtns.classList.add('project-button');
      projectBtns.classList.add('mobile-button');
      projectBtns.textContent = 'See Project';
      projectBtns.id = `${projects[i].name}`;

      projectDesc.innerHTML = `
      <h3 class="desc-title">${projects[i].name}</h3>
      <p class="description mobile-description">${projects[i].description}</p>`;

      projectTechnologies.forEach((tech) => {
        const list = document.createElement('li');
        list.innerHTML = `<li><a href="#">${tech}</a></li>`;
        techLists.appendChild(list);
      });
      gridContainer.appendChild(projectArticle);
      projectArticle.appendChild(transparent);
      transparent.appendChild(projectDesc);
      transparent.appendChild(techLists);
      transparent.appendChild(projectBtns);
    }
  }
}

function fillPage() {
  fillHeader();
  fillProject();
}

function fillModal(project) {
  const projectTechnologies = project.technologies.split(',');
  const modalContainer = document.querySelector('.project-details');
  modalContainer.innerHTML = '';
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const header = document.createElement('header');
  header.classList.add('modal-header');
  header.innerHTML = `
  <h2>${project.name}</h2>
  <img alt="x button to close the modal" class='cancel-modal' src="images/cancel.png">
  `;
  modal.appendChild(header);
  const techList = document.createElement('ul');
  techList.classList.add('project-tech');
  techList.classList.add('tech-details');

  projectTechnologies.forEach((tech) => {
    const list = document.createElement('li');
    list.innerHTML = `<li><a href="#">${tech}</a></li>`;
    techList.appendChild(list);
  });
  modal.appendChild(techList);
  const projectImage = document.createElement('div');
  const flexContainer = document.createElement('div');
  flexContainer.classList.add('flex-container');
  modal.appendChild(flexContainer);
  projectImage.classList.add('project-img');
  projectImage.innerHTML = `<img alt="image illustrating project" src="${project.image}">`;

  flexContainer.appendChild(projectImage);
  const projectDescription = document.createElement('div');
  projectDescription.classList.add('pro-description');
  projectDescription.innerHTML = `
      <p class="descript">${project.description}</p>
      <div class="pro-links">
          <a href="${project.liveLink}" class="project-button about-btn">See Live</a>
          <a href="${project.sourceLink}" class="project-button about-btn">See Source</a>
      </div>
     `;
  flexContainer.appendChild(projectDescription);
  modalContainer.appendChild(modal);
}

window.addEventListener('load', () => fillPage());

const modalContainer = document.querySelector('.project-details');

projectSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('project-button')) {
    modalContainer.classList.remove('invisible');
    const name = e.target.id;
    const project = getProjectByName(name);
    fillModal(project);
  }
});

modalContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('cancel-modal')) {
    modalContainer.classList.add('invisible');
  }
});
function displayError(error) {
  const errorDiv = document.querySelector('.error-div');
  const errorMessageDiv = document.querySelector('.error-message');
  errorDiv.classList.remove('invisible');
  errorMessageDiv.textContent = error;
}

const cancelMessage = document.querySelector('#cancel-message');
cancelMessage.addEventListener('click', () => {
  const errorDiv = document.querySelector('.error-div');
  errorDiv.classList.add('invisible');
});

const contactForm = document.querySelector('#cont-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.querySelector('#email');
  const emailAddress = email.value;
  const error = 'only use small letter for email address please.'
  if (emailAddress === emailAddress.toLowerCase()) contactForm.submit()
  else displayError(error)
});