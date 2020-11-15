/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [

        {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
              {
                path: '/',
                name: 'home',
                component: () => import('./views/Home.vue'),
                meta: {
                  requiresAuth: true,
                }
              },
              
              {
                path: '/users',
                name: 'users',
                component: () => import('./views/users/Users.vue')
              },
              {
                path: '/users/create',
                name: 'users-create',
                component: () => import('./views/users/new/UserSettings.vue')
              },
              {
                path: '/users/edit/:id',
                name: 'users-edit',
                component: () => import('./views/users/edit/UserSettings.vue')
              },
              
              {
                path: '/roles',
                name: 'roles.index',
                component: () => import('./views/roles/index.vue')
              },
              {
                path: '/roles/create',
                name: 'roles.create',
                component: () => import('./views/roles/create.vue')
              },
              {
                path: '/roles/edit/:id',
                name: 'roles.edit',
                component: () => import('./views/roles/edit.vue')
              },
            ],
        },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
        {
            path: '', 
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
        // =============================================================================
        // PAGES
        // =============================================================================
              {
                path: '/pages/login',
                name: 'login',
                component: () => import('@/views/pages/Login.vue')
              },
              {
                path: '/pages/error-404',
                name: 'page-error-404',
                component: () => import('@/views/pages/Error404.vue')
              },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

export default router
