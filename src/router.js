import { createWebHashHistory, createRouter } from "vue-router";
import List from "./components/ListComponent.vue";
import Home from "./components/HomeComponent.vue";
import Detail from "./components/DetailComponent.vue";
import Author from "./components/AuthorComponent.vue";
import Comment from "./components/CommentComponent.vue";

const routes = [
  {
    path: "/detail/:id",
    component: Detail,
    children: [
      { path: "author", component: Author },
      { path: "comment", component: Comment },
    ],
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home,
  },
  {
    // 존재하지 않는 url로 접속 시 노출되는 컴포넌트
    path: "/:anything(.*)",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
