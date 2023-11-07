import React from 'react'
import  ReactDOM  from 'react-dom'
import App from './App'

//Mount functon to start up the app
const mount =(el)=>{
    ReactDOM.render(
        <App/>,
        el
    )

}


//if we are in developement and in isolation,
//call mount immidiately
if(process.env.NODE_ENV === 'development'){
        const devRoot=document.querySelector('#marketing-dev-root')
        if(devRoot){
            mount(devRoot)
        }
}

//we are running through conatiner
//amd we should export the mount fnction
export {mount}