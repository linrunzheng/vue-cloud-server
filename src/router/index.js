import Vue from 'vue'
import Router from 'vue-router'

import Main from '../components/main/main.vue'
import Home from '../components/common/home.vue'
import Alarm from '../components/main/alarm.vue'

import vmList from '../components/private-cloud/vm-list.vue'
import templateList from '../components/private-cloud/template-list.vue'

import cloudList from '../components/public-cloud/cloud-list.vue'
import diskList from '../components/public-cloud/disk-list.vue'


import Message from '../components/senior-manage/message/messgae.vue'
import User from '../components/senior-manage/user/userList.vue'
import SystemSetting from '../components/senior-manage/system-setting/system-setting.vue'
import SeniorSetting from '../components/senior-manage/senior-setting/senior-setting.vue'

import Login from '../components/common/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        component: Home,
        children:[
            {
                path: '/',
                redirect: "/main"
            },
             {
                path: '/main',
                component: Main
            },
            {
                path: '/alarm',
                component: Alarm
            },
            {
                path: '/private-list',
                component: vmList
            },
            {
                path: '/template-list',
                component: templateList
            },
            {
                path: '/cloud-list',
                component: cloudList
            },
            {
                path: '/disk-list',
                component: templateList
            },
            {
                path: '/message',
                component: Message
            },
            {
                path: '/user',
                component: User
            },
            {
                path: '/system-manage',
                component: SystemSetting
            },
            {
                path: '/senior-set',
                component:SeniorSetting
            }         
        ]
    },
    {
        path: '/login',
        component: Login
    }
  ]
})
