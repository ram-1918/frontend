
import { createRouter, createWebHistory } from 'vue-router'

import TheTodos from './components/list-components/TheTodos.vue'
import TodoLists from './pages/TodoLists.vue'
// import PreviewContent from './components/list-components/PreviewContent.vue'
import TodoTasks from './pages/TodoTasks.vue'
import PageNotFound from './pages/PageNotFound.vue'
import CreateList from './pages/CreateList.vue'

const router = createRouter({
    history: createWebHistory(), 
    routes: [
            {path: '/', redirect: '/api/lists'},
            {
                name: 'api', 
                path: '/api', 
                component: TheTodos, 
                children: [
                    {name: 'lists', path: 'lists', component: TodoLists},
                    {name: 'createlist', path: 'create-list', component: CreateList, props: true},
                    {name: 'tasks', path: ':listid', component: TodoTasks, props: true},
                ]
            },
            {path: '/:NotFound(.*)', component: PageNotFound}
        ],
        linkActiveClass: 'active'
});

export default router;