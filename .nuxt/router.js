import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _25f159b2 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages_login_index" */))
const _35260f61 = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages_register_index" */))
const _29cfbad0 = () => interopDefault(import('..\\pages\\cslmis\\artisans\\index.vue' /* webpackChunkName: "pages_cslmis_artisans_index" */))
const _09ef700d = () => interopDefault(import('..\\pages\\cslmis\\centers\\index.vue' /* webpackChunkName: "pages_cslmis_centers_index" */))
const _38aa27eb = () => interopDefault(import('..\\pages\\cslmis\\dashboard.vue' /* webpackChunkName: "pages_cslmis_dashboard" */))
const _24ca6123 = () => interopDefault(import('..\\pages\\cslmis\\centers\\training-center.vue' /* webpackChunkName: "pages_cslmis_centers_training-center" */))
const _00f2840e = () => interopDefault(import('..\\pages\\cslmis\\companies\\Companies.vue' /* webpackChunkName: "pages_cslmis_companies_Companies" */))
const _add6c412 = () => interopDefault(import('..\\pages\\cslmis\\trades\\Trades.vue' /* webpackChunkName: "pages_cslmis_trades_Trades" */))
const _352a5de4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/login",
      component: _25f159b2,
      name: "login"
    }, {
      path: "/register",
      component: _35260f61,
      name: "register"
    }, {
      path: "/cslmis/artisans",
      component: _29cfbad0,
      name: "cslmis-artisans"
    }, {
      path: "/cslmis/centers",
      component: _09ef700d,
      name: "cslmis-centers"
    }, {
      path: "/cslmis/dashboard",
      component: _38aa27eb,
      name: "cslmis-dashboard"
    }, {
      path: "/cslmis/centers/training-center",
      component: _24ca6123,
      name: "cslmis-centers-training-center"
    }, {
      path: "/cslmis/companies/Companies",
      component: _00f2840e,
      name: "cslmis-companies-Companies"
    }, {
      path: "/cslmis/trades/Trades",
      component: _add6c412,
      name: "cslmis-trades-Trades"
    }, {
      path: "/",
      component: _352a5de4,
      name: "index"
    }],

    fallback: false
  })
}
