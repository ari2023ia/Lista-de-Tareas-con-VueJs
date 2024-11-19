import { createRouter, createWebHistory } from 'vue-router'
import Inicio2 from './components/Inicio2.vue'
import HelloWorld from './components/HelloWorld.vue'
import AgregarTareas from './components/AgregarTareas.vue'
import ListaDeTareas from './components/ListaDeTareas.vue'
import VisionCombinada from './components/VisionCombinada.vue'

const routes = [
  { path: '/', component: Inicio2, name:'Inicio2' },
  { path: '/Lista-de-Tareas-con-VueJs', component: HelloWorld, name:'Inicio' },
  { path: '/agregartareas', component: AgregarTareas, name:'agregar-tareas' },
  { path: '/listadetareas', component: ListaDeTareas, name:'lista-tareas' },
  { path: '/visioncombinada', component: VisionCombinada, name:'vision-combinada' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router