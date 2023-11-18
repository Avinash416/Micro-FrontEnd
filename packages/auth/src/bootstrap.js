import React from 'react'
import  ReactDOM  from 'react-dom'
import {createMemoryHistory, createBrowserHistory} from 'history'
import App from './App'

//Mount functon to start up the app
const mount =(el, {onNavigate, defaultHistory, initialPath,onSignIn})=>{
    const history=defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    })
    //Create a new instance of our main component and pass in the history object. This will allow us to navigate between routes using the browser  

    if(onNavigate){
        history.listen(onNavigate)    
    }
    ReactDOM.render(
        <App onSignIn={onSignIn} history={history}/>,
        el
    )

    return{
        onParentNavigate({pathname : nextPathname}){
            const {pathname}= history.location
            if(pathname !== nextPathname){
                    history.push(nextPathname)
            }
        }
    }

}


//if we are in developement and in isolation,
//call mount immidiately
if(process.env.NODE_ENV === 'development'){
        const devRoot=document.querySelector('#auth-dev-root')
        if(devRoot){
            mount(devRoot,{ defaultHistory: createBrowserHistory()}) //added empty object beacuse its giving error its just a temporfary sol
        }
}

//we are running through conatiner
//amd we should export the mount fnction
export {mount}