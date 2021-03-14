import React from "react"
import Layout from "../components/layout"
// Components
import HomeBanner from "../components/homePage/HomeBanner"
import HomeContent from '../components/homePage/HomeContent'
import HomeFeature from '../components/homePage/HomeFeature'
import HomeAbout from '../components/homePage/HomeAbout'
// Contexts
import { useGlobalState, useGlobalDispatch } from "../context/globalContext"
const IndexPage = (props) => {
  const { cursorStyles } = useGlobalState()
  const dispatch = useGlobalDispatch()
  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }
  return (
    <Layout onCursor={onCursor}>
      <HomeBanner onCursor={onCursor} />
      <HomeContent/>
      <HomeFeature onCursor={onCursor}/>
      <HomeAbout onCursor={onCursor}/>
    </Layout>
  )
}

export default IndexPage
