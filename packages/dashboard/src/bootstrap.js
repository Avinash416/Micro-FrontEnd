import {createApp} from 'vue'
import Dashboard from '../components/Dashboard.vue'
//Mount functon to start up the app
const mount =(el)=>{
const app= createApp(Dashboard);
app.mount(el)
}

//if we are in developement and in isolation,
//call mount immidiately
if(process.env.NODE_ENV === 'development'){
        const devRoot=document.querySelector('#dashboard-dev-root')
        if(devRoot){
            mount(devRoot) 
        }
}

//we are running through conatiner
//amd we should export the mount fnction
export {mount}