import { createApp } from 'vue'

import App from './App.vue'
import router from './router.js'
import store from './store/index.js'

import TodoHeader from './components/layouts/TodoHeader.vue'
import TodoFooter from './components/layouts/TodoFooter.vue'
import BaseCard from './components/UI/BaseCard.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseDropdown from './components/UI/BaseDropdown.vue'
import BaseTags from './components/UI/BaseTags.vue'
import EdgeCase from './components/UI/EdgeCase.vue'

const app = createApp(App);

app.use(router);
app.use(store);

app.component("todo-header", TodoHeader);
app.component("todo-footer", TodoFooter);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-dropdown", BaseDropdown);
app.component("base-tags", BaseTags);
app.component("edge-case", EdgeCase);

app.mount('#app');