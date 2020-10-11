'use strict';

// Aside form submit
function onInit() {
  renderProjects()
  renderModals()
}

function onFormSubmit() {
  var email = document.querySelector('.email').value;
  var subject = document.querySelector('.subject').value;
  var textBody = document.querySelector('.textBody').value;
  console.log(textBody);
  
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&b
  ody=try111'`);

  document.querySelector('.email').value = '';
  document.querySelector('.subject').value = '';
  document.querySelector('.textBody').value = '';

  openCanvas()
};

function renderProjects() {
var projects = getProjects()
var htmlStr = '';
projects.forEach((project,index) => {
  htmlStr += `<div class="col-md-3 col-sm-6 portfolio-item">
  <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${index+1}">
    <div class="portfolio-hover">
      <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
      </div>
    </div>
    <img class="img-fluid protfolioImg" src="${project.img}" alt="">
  </a>
  <div class="portfolio-caption">
    <h4>${project.name}</h4>
    <p class="text-muted">${project.title}</p>
  </div>
</div>`
})
document.querySelector('.projects').innerHTML = htmlStr
}

function renderModals() {
  var projects = getProjects()
  var htmlStr = '';
  projects.forEach((project,index) => {
    htmlStr = '';
    htmlStr += `
    <div class="modal-dialog">
      <div class="modal-content p-2 h-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 ">
              <div class="modal-body ">
                <!-- Project Details Go Here -->
                <button class="btn btn-primary bg-dark" data-dismiss="modal" type="button">
                    <i class="fa fa-times "></i>
                    Close</button>
                <h2 class="mt-2">${project.name}</h2>
                <p class="item-intro text-muted mb-2">${project.title}</p>
                <img class="img-fluid d-block mx-auto modalImg" src="${project.img}" alt="">
                <p>${project.desc}</p>
                <ul class="list-inline">
                  <li>Date: ${project.publishedAt}</li>
                  <li>${project.title}</li>
                  <li>${project.labels}</li>
                </ul>
                <a href="${project.url}" class="badge badge-warning projectLink">Go to project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
  document.querySelector(`#portfolioModal${index+1}`).innerHTML = htmlStr
  })
  
  }


