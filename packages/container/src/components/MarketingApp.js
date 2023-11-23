
import {mount} from 'marketing/MarketingApp'
import React,{useRef,useEffect} from 'react'
import {useHistory} from 'react-router-dom'

export default()=>{
    const ref = useRef(null)
    const history=useHistory()

    useEffect(() => {
      const {onParentNavigate}=mount(ref.current,{
        //we just renamed the pathname propery coming from location object you can put location in the function to see the location object
        onNavigate:({pathname: nextPathname})=>{
          const {pathname}=history.location
          if(pathname !== nextPathname){
            history.push(nextPathname)
          }
        }
      })

      history.listen(onParentNavigate)
    },[])

    return <div ref={ref}/>
   
}

//
//In this code, we are using React hooks to manage the state and side effects of a functional component.
//
//1. `useRef` is used to create a reference to a DOM element. In this case, we are creating a reference to a `div` element.
//
//2. `useEffect` is used to perform side effects in functional components. In this case, we are using it to mount the MarketingApp component to the `div` element referenced by `ref`.
//
//3. `useHistory` is a hook from `react-router-dom` that allows us to access the browser's history. We use it to listen for changes in the browser's history and update the MarketingApp component accordingly.
//
//4. Inside the `useEffect` hook, we call the `mount` function from the MarketingApp module. This function takes two arguments: the DOM element to mount the MarketingApp component to, and an object containing the `onNavigate` callback function.
//
//5. The `onNavigate` callback function is called whenever the MarketingApp component wants to navigate to a new URL. It takes an object with a `pathname` property as its argument.
//
//6. Inside the `onNavigate` callback function, we check if the current pathname in the browser's history is different from the next pathname. If it is, we