import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/login/LoginView.vue';
import AdminPaymentHistoryView from '../views/admin/AdminPaymentHistoryView.vue';
import MemberHomeView from '../views/member/MemberHome.vue';
import AdminHomeView from '../views/admin/AdminHomeView.vue';
import MemberPersonalProfile from '../views/member/MemberPersonalProfile.vue';
import MemberHistory from '../views/member/MemberHistory.vue';
import MemberPayment from '../views/member/MemberPayment.vue';
import PersonalProfile from '../views/admin/PersonalProfile.vue';

const isAdmin= true;
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
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/home",
      name: "home",
      props: {
        name: mockName,
        members: mockData,
      },
      get component() {
        return isAdmin ? AdminHomeView : MemberHomeView;
      },
    },
    {
      path: '/my-profile',
      component: MemberPersonalProfile,
    },
    {
      path: '/my-history',
      component: MemberHistory,
    },
    {
      path: '/my-payments',
      component: MemberPayment,
    },
    {
      //admin page
      path: '/user/:id',
      props: {
        members: mockData,
      },
      component: PersonalProfile,
    },
    {
      path: '/admin-payment-history',
      component: AdminPaymentHistoryView,
      props: {
        payments: mockPayments,
      },
    },
  ],
});
export default router
