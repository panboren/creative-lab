import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    {
      path: '/DynamicTextEffect',
      name: 'DynamicTextEffect',
      component: () => import('../views/DynamicTextEffect.vue')
    },
    {
      path: '/multiCamera',
      name: 'MultiCamera',
      component: () => import('../views/MultiCamera.vue')
    },
    {
      path: '/infiniteBeam',
      name: 'InfiniteBeam',
      component: () => import('../views/InfiniteBeamView.vue')
    },
    {
      path: '/glassmorphism',
      name: 'GlassMorphism',
      component: () => import('../views/GlassMorphism.vue')
    },
    {
      path: '/mixHtml',
      name: 'MixHTML',
      component: () => import('../views/MixHTMLView.vue')
    }, 
    // // Shaders
    {
      path: '/MouseShaderEffect',
      name: 'MouseShaderEffect',
      component: () => import('../views/MouseShaderEffect.vue')
    },
    {
      path: '/darkStar',
      name: 'DarkStar',
      component: () => import('../views/DarkStarView.vue')
    },
    // {
    //   path: '/shaderParkIntegration',
    //   name: 'ShaderParkIntegration',
    //   component: () => import('../views/ShaderParkIntegrationView.vue')
    // },
    {
      path: '/destroyObject',
      name: 'DestroyObject',
      component: () => import('../views/DestroyGeosView.vue')
    },
    {
      path: '/wave',
      name: 'Wave',
      component: () => import('../views/WaveView.vue')
    },
    // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ]
})

export default router
