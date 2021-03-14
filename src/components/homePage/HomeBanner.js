import React,{useEffect,useRef} from 'react'
import {Banner,Video,BannerTitle,Headline,Canvas} from '../../styles/homeStyles'
// Custom Hook
import useWindowSize from '../../hooks/useWindowSize'
// Context
import {useGlobalState} from '../../context/globalContext'
const HomeBanner = ({onCursor}) => {
    let canvas = useRef(null)
    const size = useWindowSize()
    const {currentTheme} = useGlobalState()
    useEffect(()=>{
      let renderingElement = canvas.current
      let drawingElement = renderingElement.cloneNode()
     //   Drawing Contexts
     let drawingContexts = drawingElement.getContext("2d");
     let renderingContexts = renderingElement.getContext("2d")
     
     //Mouse Activities
     let lastX
     let lastY
     let moving  = false

     //  Setting the global composition of canvas 2D element
     renderingContexts.globalCompositeOperation = "source-over"
     renderingContexts.fillStyle = currentTheme === "dark" ? "#000000" : "#fff"
     renderingContexts.fillRect(0,0,size.width,size.height)
     
     

     renderingElement.addEventListener('mouseover', e=>{
         moving = true;
         lastX = e.pageX - renderingElement.offsetLeft
         lastY = e.pageY - renderingElement.offsetTop
     })
     renderingElement.addEventListener('mouseup', e=>{
         moving = false;
         lastX = e.pageX - renderingElement.offsetLeft
         lastY = e.pageY - renderingElement.offsetTop
     })
     renderingElement.addEventListener('mousemove',e=>{
         
         if(moving){
             drawingContexts.globalCompositeOperation = "source-over"
             renderingContexts.globalCompositeOperation = "destination-out"
             let currentX = e.pageX - renderingElement.offsetLeft
             let currentY = e.pageY - renderingElement.offsetTop
             drawingContexts.lineJoin = "round"
             drawingContexts.moveTo(lastX,lastY)
             drawingContexts.lineTo(currentX,currentY)
             drawingContexts.closePath()
             drawingContexts.lineWidth = 120
             drawingContexts.stroke()
             lastX = currentX
             lastY = currentY
             renderingContexts.drawImage(drawingElement,0,0)
             
         }
     })
    },[currentTheme,size.width,size.height])
    // Animation
    const parent = {
        hidden:{
            opacity:0,
            y:800
        },
        show:{
            opacity:1,
            y:0,
            transition:{
                staggerChildren:0.3
            }
        }

    }
    const child = {
        hidden:{
            opacity:0,
            y:800
        },
        show:{
            opacity:1,
            y:0,
            transition:{
                duration:0.8,
                ease: [0.6,0.05,-0.01,0.9]
            }
        }
    }
    return (
        <Banner>
            <Video>
                <video height="100%" width="100%" loop autoPlay muted src={require('../../assets/video/video.mp4')}/>
            </Video>
            <Canvas 
             key={currentTheme}
             height={size.height} 
             width={size.width} 
             ref={canvas} 
             onMouseEnter={()=>onCursor("hovered")}
             onMouseLeave={onCursor}/>
            <BannerTitle variants={parent} initial="hidden" animate="show">
                <Headline variants={child}>DIG</Headline>
                <Headline variants={child}>DEEP</Headline>
            </BannerTitle>
        </Banner>
    )
}

export default HomeBanner
