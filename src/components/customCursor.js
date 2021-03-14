import React,{useState,useEffect} from 'react'
import {Cursor} from '../styles/globalStyles'
// context
import {useGlobalState} from '../context/globalContext'
const CustomCursor = ({toggleMenu}) => {
    const {cursorType} = useGlobalState()
    // Mouse State'
    const [mousePosition,setMousePosition] = useState({
        x:400,
        y:400
    })
    // Event Handler
    const onMouseMove = event =>{
        const {pageX:x, pageY:y} = event
        setMousePosition({x,y})
    }
    //want to listen to this handler
    useEffect(()=>{
        document.addEventListener('mousemove',onMouseMove);
        return ()=> {
            document.removeEventListener('mousemove',onMouseMove)
        }
    },[])
    return (
        <div>
            <Cursor className={`${!!cursorType?"hovered" : " "} ${cursorType} ${toggleMenu ? "nav-open" : " "}`} style={{left:`${mousePosition.x}px`,top:`${mousePosition.y}px`}}/>
        </div>
    )
}

export default CustomCursor
