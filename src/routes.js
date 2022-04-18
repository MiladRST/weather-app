import GetStarted from './components/GetStarted.vue'
import MainApp from './components/MainApp.vue'
import DailyForcast from './components/DailyForcast.vue'

export const routes = [
    { path: '/', component: GetStarted },
    { path: '/weather', component: MainApp },
    { path: '/weather/daily', component: DailyForcast }
]