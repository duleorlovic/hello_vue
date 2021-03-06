import VueRouter from 'vue-router'
import MyDash from 'components/my-dash.vue'
import Posts from 'components/my-dash/posts.vue'
import Settings from 'components/my-dash/settings.vue'
import App from './app.vue'
import LogIn from 'components/log-in.vue'
import LogOut from 'components/log-out.vue'
import SignUp from 'components/sign-up.vue'
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '', component: App,
    },
    {
      path: '/log-in', component: LogIn,
    },
    {
      path: '/log-out', component: LogOut,
    },
    {
      path: '/sign-up', component: SignUp,
    },
    {
      path: '/my-dash', component: MyDash,
      children: [
        {
          path: '',
          component: Posts
        },
        {

          path: 'profile',
          component: { template: '<div>profile<transition name="slide-left"><router-view class="child-view"></router-view></transition></div>' },
          children: [
            {
              path: '',
              component: { template: '<div>default</div>' }
            },
            {
              path: 'me',
              component: { template: '<div>me</div>' }
            },
            {
              path: 'team',
              component: { template: '<div>team</div>' }
            }
          ]
        },
        {
          path: 'settings',
          component: Settings
        }
      ]
    },
    {
      path: '/bar', component: { template: '<div>bar</div>' }
    }
  ]
})

export default router
