/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  {
    url: "/",
    name: "Home",
    slug: "home",
    icon: "HomeIcon",
  }
  ,
  {
    header:'Configuración',
    icon: 'LayersIcons',
    items: [
      {
        url: "/users",
        name: "Usuarios",
        slug: "users",
        icon: "UsersIcon",
      },
      {
        url: "/roles",
        name: "Roles",
        slug: "roles",
        icon: "SmileIcon",
      },

    ]
  },
  
]
