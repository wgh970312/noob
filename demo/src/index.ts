import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { sieve, dayjs, isString } from '@noob/kit'

console.log(sieve(Promise.resolve(1)), dayjs().format('YYYY-MM-DD HH:mm:ss'));

createApp(App).mount('#root');
