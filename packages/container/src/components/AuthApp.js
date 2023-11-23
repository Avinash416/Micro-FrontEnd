
import {mount} from 'auth/AuthApp'
import React,{useRef,useEffect} from 'react'
import {useHistory} from 'react-router-dom'

export default({onSignIn})=>{
    const ref = useRef(null)
    const history=useHistory()

    useEffect(() => {
      const {onParentNavigate}=mount(ref.current,{
             // We provide an initial pathname because on the first click, the createMemory is empty, which is why it's not showing the signin page.
             initialPath:history.location.pathname,

             // We renamed the pathname property coming from the location object. You can put location in the function to see the location object.
             onNavigate:({pathname: nextPathname})=>{
               const {pathname}=history.location
               if(pathname !== nextPathname){
                 history.push(nextPathname)
               }
             },
   
             onSignIn,
       })

      // We listen for changes in the history and call the onParentNavigate function when a change is detected.
      history.listen(onParentNavigate)
    },[])

    return <div ref={ref}/>
  
}
//
//In this code, we are using the `useEffect` hook to mount the `AuthApp` component. The `mount` function takes the `ref.current` element and an object with configuration options.
//
//The `initialPath` option is set to the current pathname of the history location. This ensures that the signin page is displayed when the component is first rendered.
//
//The `onNavigate` option is a function that takes an object with a `pathname` property. This function is called whenever the user navigates to a new page. It checks if the current pathname is different from the next pathname. If they are different, it updates the history location by pushing the new pathname.
//
//The `onSignIn` option is a function that is called when the user signs in. This function is passed as a prop to the `AuthApp` component.
//
//Finally, we listen for changes in the history location using the `history.listen` method. When a change is detected, the `onParentNavigate` function is called. This function is also provided by the `mount` function and is used to handle navigation events in the parent component..</s>