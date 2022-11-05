import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import detailsView from '../views/PersonalProfile.vue'
import AdminHome from '../views/AdminHomeView.vue'

const mockData = [];
const mockName = "test admin";

for (let i = 1; i < 5; i++) {
  mockData.push({
    name: `mock person #${i}`,
    id: i,
  });
}

mockData[0].profilePicUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png";
mockData[1].profilePicUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/222.png";
mockData[2].profilePicUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png";
mockData[3].profilePicUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/754.png";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView
    },
    {
      path: '/member-home',
      name: 'member-home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MemberHome.vue')
    },
    {
      path:'/admin-home',
      name:'admin-home',
      props: {
        name: mockName,
        members: mockData,
      },
      
      component: ()=> import ('../views/AdminHomeView.vue'),

      children:[
        {
          path: 'user/:id',
          component: ()=> import ('../views/PersonalProfile.vue'),
          

        },
      ],
    }
  ]
})

export default router
