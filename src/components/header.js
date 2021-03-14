import React,{useEffect,useRef} from 'react'
import {Link} from 'gatsby'

// Sttyled Components
import {Container,Flex} from '../styles/globalStyles'
import {HeaderNav,Logo,Menu} from '../styles/headerStyles'

// GlobalDispatchContext and GlobalStateContext hook
import { useGlobalState,useGlobalDispatch} from '../context/globalContext'
//custom hook
import useElementPosition from '../hooks/useElementPosition'
const Header = ({onCursor,toggleMenu,setToggleMenu,setHoveredPosition}) => {
    const dispatch = useGlobalDispatch();
    const {currentTheme} = useGlobalState()
    const hamburgerMenu = useRef(null)
    const position = useElementPosition(hamburgerMenu)
    const toggleThemeHandler = ()=>{
        if(currentTheme === 'dark'){
            dispatch({type:"TOGGLE_THEME",theme:"light"})
        } else{
            dispatch({type:"TOGGLE_THEME",theme:"dark"})
        }
    }
    const menuHover = ()=>{
        onCursor("locked")
        setHoveredPosition({x:position.x,y:position.y + 72})
    }
    useEffect(()=>{
        window.localStorage.setItem("theme",currentTheme)
    },[currentTheme])
    return (
        <HeaderNav  animate={{y:0,opacity:1}} initial={{y:-72,opacity:0}} transition={{duration:1,ease:[0.6,0.05,-0.01,0.9]}}>
            <Container>
                <Flex spaceBetween noHeight>
                    <Logo 
                     onMouseEnter={()=>onCursor("hovered")} 
                     onMouseLeave={onCursor}
                    >
                       <Link to="/">FURR</Link>
                       <span 
                        aria-hidden= "true"
                        onClick={toggleThemeHandler}
                        onMouseEnter={()=>onCursor("pointer")}
                        onMouseLeave={onCursor}></span>
                       <Link to="/">W</Link>
                    </Logo>
                    <Menu 
                    ref={hamburgerMenu}
                    onClick={()=>setToggleMenu(!toggleMenu)} 
                    onMouseEnter={menuHover} 
                    onMouseLeave={onCursor} >
                        <button>
                            <span></span>
                            <span></span>
                        </button>
                    </Menu>
                </Flex>
            </Container> 
        </HeaderNav>
    )
}

export default Header
