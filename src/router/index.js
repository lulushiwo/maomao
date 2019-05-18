import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../page/Home/Home'
import Cinema from '../page/Cinema/Cinema'
import Profile from '../page/Profile/Profile'
import IsMovie from '../page/IsMovie/IsMovie'
import UpcomingMovie from '../page/UpcomingMovie/Upcoming'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/home',
            component: Home,
            children: [
                {
                    path:'/home/ismovie',
                    component: IsMovie
                },
                {
                    path:'/home/upcomingmovie',
                    component: UpcomingMovie
                },
            ]
        },
        {
            path:'/Cinema',
            component:Cinema
        },
        {
            path:'/profile',
            component:Profile
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})