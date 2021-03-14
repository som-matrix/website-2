import {useState,useEffect} from 'react'

export default function useWindowSize(){

     function getSize(){
         return{
             width: window.innerWidth,
             height: window.innerHeight
         }
     }
     const [windowSize,setWindowSize] = useState(getSize)

     useEffect(()=>{
        //  Handling Resize
        function handlingResize(){
            setWindowSize(getSize())
        }
        window.addEventListener('resize',handlingResize)

        return ()=>{
            window.removeEventListener('resize',handlingResize)
        }
     },[])
     return windowSize
}