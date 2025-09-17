import CAService from '@/views/CAService.vue'
import CloudDatabase from '@/views/CloudDatabase.vue'
import CloudServer from '@/views/CloudServer.vue'
import DDoSHighIP from '@/views/DDoSHighIP.vue'
import LoadBalance from '@/views/LoadBalance.vue'
import WebFirewall from '@/views/WebFirewall.vue'
import YunDunConsole from '@/views/YunDunConsole.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/cloud-server',
      component: CloudServer
    },
    {
      path: '/cloud-database',
      component: CloudDatabase
    },
    {
      path: '/load-balance',
      component: LoadBalance
    },
    {
      path: '/yun-dun-console',
      component: YunDunConsole
    },
    {
      path: '/ddos-high-ip',
      component: DDoSHighIP
    },
    {
      path: '/web-firewall',
      component: WebFirewall
    },
    {
      path: '/ca-service',
      component: CAService
    }
  ]
})
export default router
