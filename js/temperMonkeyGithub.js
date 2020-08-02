// used to show navigation tab "repositoies in github HEADER
// usage: install it to Temper Mokey 

function addRepository(){

  const userName = "lucasvtiradentes"
  const el_navbar = document.querySelector('nav')

  const el_repo = document.createElement("A");
  el_repo.setAttribute('style', 'js-selected-navigation-item Header-link py-md-3  mr-0 mr-md-3 py-2 border-top border-md-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:explore')
  el_repo.setAttribute('href', `/${userName}?tab=repositories`)
  el_repo.setAttribute('data-ga-click', `Header, click, Nav menu - item:explore`)
  el_repo.setAttribute('data-selected-links', `/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore`)

  el_repo.innerText = "Repositories"
  el_navbar.appendChild(el_repo);

}