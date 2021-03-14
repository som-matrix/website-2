import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// Importing Global Styled Components
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"

// components
import Header from "./header"
import CustomCursor from "./customCursor"
import Navigation from "../components/Navigation"
import Footer from '../components/footer'
// //importing GlobalContext
import { useGlobalState } from "../context/globalContext"

// Global Styles
const GlobalStyles = createGlobalStyle`
  ${normalize}
  *{
    text-decoration:none;
    cursor:none;
  }
  html{
    box-sizing:border-box;
    font-size:16px;
    --webkit-font-smoothing:antialiased;
  }
  body{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight:400;
    background:${(props) => props.theme.background};
    overscroll-behavior:none;
    overflow-x:hidden;
  }
`
const Layout = ({ children, onCursor }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [hoveredPosition, setHoveredPosition] = useState({
    x: 0,
    y: 0,
  })
  const darkTheme = {
    background: "#000",
    text: "#fff",
    red: "#ea291e",
    left : `${hoveredPosition.x}px`,
    top: `${hoveredPosition.y}px`,
  }
  const lightTheme = {
    background: "#fff",
    text: "#000",
    red: "#ea291e",
    left : `${hoveredPosition.x}px`,
    top: `${hoveredPosition.y}px`,
  }
  const { currentTheme } = useGlobalState()
  //  const dispatch = useGlobalDispatch();
  //  const onCursor = cursorType =>{
  //     cursorType = (cursorStyles.includes(cursorType)&&cursorType) || false;
  //      dispatch({type:"CURSOR_TYPE",cursorType:cursorType})
  //  }
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <CustomCursor toggleMenu={toggleMenu} />
      <Header
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        hoveredPosition={hoveredPosition}
        setHoveredPosition={setHoveredPosition}
      />
      <Navigation
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        setHoveredPosition={setHoveredPosition}
      />
      <main>{children}</main>
      <Footer onCursor={onCursor}/>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
