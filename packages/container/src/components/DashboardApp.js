
import {mount} from 'dashboard/DashboardApp'
import React, { useEffect,useRef } from 'react'
import {useHistory} from 'react-router-dom'

export default({onSignIn})=>{
    // Create a reference to the DOM element where the dashboard will be mounted
    const ref = useRef(null)
    const history=useHistory()

    // useEffect is a hook that handles effects in functional components
    // It runs after every render
    useEffect(() => {
        // Mount the dashboard to the DOM element referenced by ref
        mount(ref.current)
    },[])

    // Return a div with a reference to the DOM element
    // This div will be the container for the dashboard
    return <div ref={ref}/>
}
//
//In this code, we are creating a React component that mounts a dashboard to a DOM element. The dashboard is mounted using the `mount` function from the `dashboard/DashboardApp` module.
//
//We create a reference to the DOM element using `useRef(null)`. This reference is passed to the `mount` function, which mounts the dashboard to the DOM element.
//
//We use the `useEffect` hook to run the `mount` function after every render. The `useEffect` hook takes two arguments: a function to