// Imports
// __________________________________________________
import wrappedHashRouter from "./component/hashRouter.js";
import theme from "./component/theme.js";
import { HomePage } from "./pages/home.page.js";
import { RefugeesPage } from "./pages/refugees.page.js";

// 
// __________________________________________________
document.addEventListener('DOMContentLoaded', () => {
  // Variables
  const WHR = wrappedHashRouter;

  const routes = {
    '': {
      pageTitle: '',
      template: HomePage,
    },
    '#/Home': {
      pageTitle: '',
      template: HomePage,
    },

    '#/Refugees/Financial_Assistance': {
      pageTitle: '',
      template: RefugeesPage,
    },

    '#/Refugees/2': {
      pageTitle: '',
      template: RefugeesPage,
    },
  }

  const fn = () => {
    document.querySelector('#wrapped-root').innerHTML = routes[WHR.get()].template();
    theme()
  }
  
  window.addEventListener('load', () => {
    fn()
  });
  window.addEventListener('hashchange', () => {
    fn()
  });
  

})