

import React from 'react'
import ReactDOM from 'react-dom'
import {createMemoryHistory, createBrowserHistory} from 'history'
import App from './App'

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory }) => {
    // Create a new instance of our main component and pass in the history object.
    // This will allow us to navigate between routes using the browser.
    const history = defaultHistory || createMemoryHistory()

    // If onNavigate function is provided, listen to history changes and call onNavigate
    if (onNavigate) {
        history.listen(onNavigate)
    }

    // Render the App component with the history object
    ReactDOM.render(
        <App history={history} />,
        el
    )

    // Return an object with a function to navigate to a new pathname
    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location

            // If the current pathname is not the same as the next pathname, navigate to the next pathname
            if (pathname !== nextPathname) {
                history.push(nextPathname)
            }
        }
    }
}

// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#marketing-dev-root')

    // If the devRoot element exists, mount the app with the devRoot element and createBrowserHistory
    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() }) // added empty object because it's giving an error. It's just a temporary solution.
    }
}

// We are running through a container
// And we should export the mount function
export { mount }
//
//This code sets up a React app using the `history` library. It provides a `mount` function that takes an element and an options object as parameters. The `mount` function creates a new instance of the `App` component and passes in the `history` object. It also listens for changes in the history and calls the `onNavigate` function if provided. The `mount` function returns an object with a `onParentNavigate` function that can be used to navigate to a new pathname.
//
//The code also checks if the current environment is in development mode. If it is, the `mount` function is called immediately with the `devRoot` element and `createBrowserHistory`. This allows the app to be developed and tested in isolation..</s>