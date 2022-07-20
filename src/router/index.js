import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Design System Library',
      navdsl: true
    }    
  },
  {
    path: '/components/animations',
    name: 'Animations',   
    component: () => import('../views/components/animations/'),
    meta: {
      title: 'Animations',
      navdsl: true
    }     
  },    
  {
    path: '/components/badges',
    name: 'Badges',   
    component: () => import('../views/components/badges/'),
    meta: {
      title: 'Badges',
      navdsl: true
    }     
  },  
  {
    path: '/components/buttons',
    name: 'Buttons',   
    component: () => import('../views/components/buttons/'),
    meta: {
      title: 'Buttons',
      navdsl: true
    }     
  },
  {
    path: '/components/drop-downs',
    name: 'Drop Downs',   
    component: () => import('../views/components/drop-downs/'),
    meta: {
      title: 'Drop Downs',
      navdsl: true
    }     
  },
  {
    path: '/components/icons',
    name: 'Icons',   
    component: () => import('../views/components/icons/'),
    meta: {
      title: 'Icons',
      navdsl: true
    }     
  },  
  {
    path: '/components/inputs',
    name: 'Inputs',   
    component: () => import('../views/components/inputs/'),
    meta: {
      title: 'Input Fields',
      navdsl: true
    }     
  }, 
  {
    path: '/components/modals',
    name: 'Modals',   
    component: () => import('../views/components/modals/'),
    meta: {
      title: 'Modals',
      navdsl: true
    }     
  },
  {
    path: '/components/tables',
    name: 'Tables',   
    component: () => import('../views/components/tables/'),
    meta: {
      title: 'Tables',
      navdsl: true
    }     
  },   
  {
    path: '/components/tabs',
    name: 'Tabs',   
    component: () => import('../views/components/tabs/'),
    meta: {
      title: 'Tabs',
      navdsl: true
    }     
  },
  {
    path: '/mocks/home',
    name: 'Mock Home',   
    component: () => import('../views/mocks/home'),
    meta: {
      title: 'Mock Home',
      navloans: true,
      themeName: 'dc-com'
    }     
  },
  {
    path: '/mocks/balances',
    name: 'Balances',   
    component: () => import('../views/mocks/balances/'),
    meta: {
      title: 'Balances',
      navloans: true,
      themeName: 'dc-com'
    }     
  },
  {
    path: '/mocks/dashboards/dashboard',
    name: 'Dashboard',   
    component: () => import('../views/mocks/dashboards/dashboard'),
    meta: {
      title: 'Dashboard',
      navloans: true,
      themeName: 'dc-com'
    }     
  },
  {
    path: '/mocks/dashboards/dashboard-bank',
    name: 'Dashboard Bank',   
    component: () => import('../views/mocks/dashboards/dashboard-bank'),
    meta: {
      title: 'Dashboard Bank',
      navloans: true,
      themeName: 'dc-com'
    }     
  },
  {
    path: '/marginbloc/home',
    name: 'MB Home',   
    component: () => import('../views/mock-marginb/one/home'),
    meta: {
      title: 'Bank One Home',
      marginbloc: true,
      themeName: 'dc-com',
    }     
  },
  {
    path: '/marginbloc/bank/home',
    name: 'MB Bank Home',   
    component: () => import('../views/mock-marginb/two/home'),
    meta: {
      title: 'Bank Two Home',
      marginbloc: true,
      themeName: 'dc-com',
    }     
  },   
  {
    path: '/marginbloc/balances',
    name: 'MB Balances',   
    component: () => import('../views/mock-marginb/one/balances/'),
    meta: {
      title: 'Bank One Balances',
      marginbloc: true,
      themeName: 'dc-com'
    }     
  },
  {
    path: '/marginbloc/bank/balances',
    name: 'MB Bank Balances',   
    component: () => import('../views/mock-marginb/two/balances/'),
    meta: {
      title: 'Bank Two Balances',
      marginbloc: true,
      themeName: 'dc-com'
    }     
  },  
  {
    path: '/marginbloc/margin',
    name: 'MB Margin',   
    component: () => import('../views/mock-marginb/one/margin'),
    meta: {
      title: 'Bank One Margin',
      marginbloc: true,
      themeName: 'dc-com'
    }     
  },
  {
    path: '/marginbloc/bank/margin',
    name: 'MB Bank Margin',   
    component: () => import('../views/mock-marginb/two/margin'),
    meta: {
      title: 'Bank Two Margin',
      marginbloc: true,
      themeName: 'dc-com'
    }     
  },    
  {
    path: '/marginbloc/dashboards/dashboard',
    name: 'MB Dashboard',   
    component: () => import('../views/mock-marginb/one/dashboards/dashboard'),
    meta: {
      title: 'Dashboard',
      marginbloc: true,
      themeName: 'dc-com'
    }     
  },
  {
    path: '/marginbloc/dashboards/dashboard-bank',
    name: 'MB Dashboard Too',   
    component: () => import('../views/mock-marginb/one/dashboards/dashboard-bank'),
    meta: {
      title: 'Dashboard Bank',
      marginbloc: true,
      themeName: 'dc-com'
    }     
  },        
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  }, 
})



router.beforeEach((to, from, next) => {
 // window.scrollTo(0,0); // if removed vue will navigate to the last scroll position - silly
  // Remove Bootstrap mobile navigation show 
  // document.querySelector("#navbarCollapse").classList.remove("show");
  // START - Ronnie - Give page proper titles
  console.log(to)

  if (to.meta.themeName) {
    document.body.classList.add(to.meta.themeName);
  }
  else {
    document.body.classList.remove(from.meta.themeName);
  }
  // Ronnie - TO ENABLE the Additional title like company name, edit .env file in route as well as index.html with process.env.VUE_APP_TITLE
  // Ronnie - document.title = `${process.env.VUE_APP_TITLE} - ${to.name}` 

  let myDocumentTitle = to.name;
  if (to.meta.title) {
    myDocumentTitle += ' - ' + to.meta.title;
  }  
  if (to.params.title) {
    myDocumentTitle += ' - ' + to.params.title
  }
  document.title = myDocumentTitle
  next()
  // END - Ronnie - Give page proper titles

});




export default router
