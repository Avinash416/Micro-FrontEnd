import {mount} from 'auth/AuthApp'
import React,{useRef,useEffect} from 'react'
import {useHistory} from 'react-router-dom'

export default({onSignIn})=>{
    const ref = useRef(null)
    const history=useHistory()

    useEffect(() => {
      const {onParentNavigate}=mount(ref.current,{
             //we hve given initial pathname because on click first time createMemory is empty thats why its not showing the signin page
             initialPath:history.location.pathname,


        //we just renamed the pathname propery coming from location object you can put location in the function to see the location object below
        onNavigate:({pathname: nextPathname})=>{
          const {pathname}=history.location
          if(pathname !== nextPathname){
            history.push(nextPathname)
          }
        },
     
          onSignIn,
        
      })

      history.listen(onParentNavigate)
    },[])

    return <div ref={ref}/>
    
}
