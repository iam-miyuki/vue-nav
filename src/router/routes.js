import HomeView from "@/Views/HomeView.vue";
export const routes = [
 { 
    path: "/", 
    name: "home", 
    component: HomeView
 },
 { 
    path: "/rates", 
    name: "rates", 
    component: ()=> import('@/Views/RatesView.vue')
 },
 {
    path:"/team",
    name:"team",
    component: ()=> import('@/Views/TeamView.vue')
 },
 {
    path:"/testimonial",
    name:"testimonial",
    component: ()=> import('@/Views/TestimonialView.vue')
 }
];