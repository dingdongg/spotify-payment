import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import AdminPaymentHistoryView from '../views/admin/AdminPaymentHistoryView.vue';

const mockData = [];
const mockName = "test admin";

for (let i = 1; i < 5; i++) {
  mockData.push({
    name: `mock person #${i}`,
    id: i,
    owed: Math.ceil(Math.random()*30),
    lastpay: Math.ceil(Math.random()*30)
  });
}

mockData[0].profilePicUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png";
mockData[1].profilePicUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/222.png";
mockData[2].profilePicUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png";
mockData[3].profilePicUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/754.png";

const mockPayments = [];

const randomStatus = () => {
  const decider = Math.round(Math.random() * 2);

  switch (decider) {
    case 0:
      return "approved";
    case 1:
      return "pending";
    default:
      return "rejected";
  }
}

for (let i = 1; i < 25; i++) {
  mockPayments.push({
    amountPaid: Math.round(30 + Math.random() * 25),
    datePaid: new Date(),
    payingMemberId: mockData[i % 4],
    status: randomStatus(),
    paymentId: i,
  });
}

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
      component: () => import('../views/member/MemberHome.vue')
    },
    {
      path:'/admin-home',
      name:'admin-home',
      
      component: () => import ('../views/admin/AdminHomeView.vue'),
      children:[
        
        {
          path: '',
          props: {
            name: mockName,
            members: mockData,
          },
          component: ()=> import ('../views/admin/ProfileSelection.vue'),
        },
        {
          path: 'user/:id',
          props: {
            members: mockData,
          },
          component: ()=> import ('../views/admin/PersonalProfile.vue'),
          

        }
      ],
    },
    {
      path: '/admin-payment-history',
      component: AdminPaymentHistoryView,
      props: {
        payments: mockPayments,
      },
    },
    {
      path: '/my-profile',
      component: ()=> import ('../views/member/MemberPersonalProfile.vue')

    },
    {
      path: '/my-history',
      component: ()=> import ('../views/member/MemberHistory.vue')

    },
    {
      path:'/my-payments',
      component: ()=> import ('../views/Payment.vue')
    }
  ]
})

export default router
