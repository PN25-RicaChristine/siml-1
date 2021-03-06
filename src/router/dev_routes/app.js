
export default{
  routes: [{
    path: '/signup',
    name: 'signup',
    component: resolve => require(['components/increment/basic/Signup.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/signup/:email/:code',
    name: 'signup',
    component: resolve => require(['components/increment/basic/Signup.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/signup_partner',
    name: 'signupPartner',
    component: resolve => require(['components/increment/basic/SignupPartner.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/verification/:email',
    name: 'verification',
    component: resolve => require(['components/increment/basic/Verification.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/login_verification/:username/:code',
    name: 'loginVerification',
    component: resolve => require(['components/increment/basic/LoginByVerification.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/login',
    name: 'loginAccount',
    component: resolve => require(['components/increment/basic/LogIn.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/request_reset_password',
    name: 'requestResetPassword',
    component: resolve => require(['components/increment/basic/RequestResetPassword.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/reset_password/:username/:code',
    name: 'resetPassword',
    component: resolve => require(['components/increment/basic/ResetPassword.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/accounts',
    name: 'accounts',
    component: resolve => require(['components/increment/settings/SubAccounts.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/products',
    name: 'products',
    component: resolve => require(['modules/menu/Products.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/add_product',
    name: 'addProducts',
    component: resolve => require(['modules/menu/ProductDetails.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/edit_product',
    name: 'editProducts',
    component: resolve => require(['modules/menu/ProductDetails.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/bookings',
    name: 'produbookingscts',
    component: resolve => require(['modules/booking/List.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }
  ]
}
