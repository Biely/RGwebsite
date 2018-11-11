import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '首页',
      component: resolve => require(['@/components/Home'], resolve),
      alias: ['/home', '/index']
    },
    {
      path: '/article/:id',
      name: '文章',
      component: resolve => require(['@/components/Article'], resolve)
    },
    {
      path: '/course',
      name: '分阶课程',
      component: resolve => require(['@/components/Course'], resolve)
    },
    {
      path: '/method',
      name: 'MAD教学',
      component: resolve => require(['@/components/Method'], resolve)
    },
    {
      path: '/activities',
      name: '主题活动',
      component: resolve => require(['@/components/Activities'], resolve)
    },
    {
      path: '/tour',
      name: '海外游学',
      component: resolve => require(['@/components/Tour'], resolve)
    },
    {
      path: '/abroad',
      name: '海外留学',
      component: resolve => require(['@/components/Abroad'], resolve)
    },
    {
      path: '/communitypartners',
      name: '社区合伙人',
      component: resolve => require(['@/components/CommunityPartners'], resolve)
    },
    {
      path: '/citypartners',
      name: '城市合伙人',
      component: resolve => require(['@/components/CityPartners'], resolve)
    },
    {
      path: '/cooperation',
      name: '企业合作',
      component: resolve => require(['@/components/Cooperation'], resolve)
    },
    {
      path: '/send',
      name: '外教派遣',
      component: resolve => require(['@/components/Send'], resolve)
    },
    {
      path: '/ercode',
      name: '外教上門',
      component: resolve => require(['@/components/Ercode'], resolve)
    },
    {
      path: '/about',
      name: '关于我们',
      component: resolve => require(['@/components/About'], resolve),
      children: [
        {
          path: 'intr',
          name: '企业介绍',
          component: resolve => require(['@/components/about/Intr'], resolve)
        },
        {
          path: 'map',
          name: '在线地图',
          component: resolve => require(['@/components/about/Map'], resolve)
        },
        {
          path: 'news',
          name: '新闻动态',
          component: resolve => require(['@/components/about/News'], resolve)
        },
        {
          path: 'recruit',
          name: '精英招聘',
          component: resolve => require(['@/components/about/Recruit'], resolve)
        }
      ]
    },
    {
      path: '/web',
      name: 'mindex',
      component: resolve => require(['@/components/mobile/Mindex'], resolve)
    },
    {
      path: '/marticle/:id',
      name: 'article',
      component: resolve => require(['@/components/mobile/Marticle'], resolve)
    }
  ]
})
