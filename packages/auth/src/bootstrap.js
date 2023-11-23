
import React from 'react'
import ReactDOM from 'react-dom'
import {createMemoryHistory, createBrowserHistory} from 'history'
import App from './App'

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
    // Create a new history object. This will allow us to navigate between routes using the browser
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    })

    // If onNavigate function is provided, add a listener to the history object
    if (onNavigate) {
        history.listen(onNavigate)
    }

    // Create a new instance of our main component and pass in the history object. This will allow us to navigate between routes using the browser
    ReactDOM.render(
        <App onSignIn={onSignIn} history={history} />,
        el
    )

    // Return an object with a method to navigate to a new path
    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location
            if (pathname !== nextPathname) {
                history.push(nextPathname)
            }
        }
    }
}

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#auth-dev-root')
    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() }) // added empty object because it's giving an error. It's just a temporary solution
    }
}

// We are running through a container
// and we should export the mount function
export { mount }

//
//In this code, we have a `mount` function that takes two parameters: `el` and an object with optional properties. The `mount` function creates a new history object, adds a listener to it if the `onNavigate` function is provided, and renders the main `App` component with the history object. It also returns an object with a method to navigate to a new path.
//
//The `mount` function is called immediately if we are in development and isolation. This ensures that the app starts up immediately when running in this environment..</s>