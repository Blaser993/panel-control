import { createApp } from 'vue';
import App from './App.vue';

import Overview from './components/Overview.vue';
import Consume from './components/Consume.vue';
import Logs from './components/Logs.vue';

const app = createApp(App);

app.component('overview', Overview);
app.component('consume', Consume);
app.component('logs', Logs);

app.mount('#app');
