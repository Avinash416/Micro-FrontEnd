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
