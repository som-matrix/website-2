import styled from 'styled-components'
import {motion} from 'framer-motion'
export const  HeaderNav = styled(motion.div)`
 height:0px;
 width:100%;
 position:absolute;
 top:72px;
 right:0;
 left:0;
 z-index:99;
`
export const  Logo = styled.div`
  a{
      font-size:1.8rem;
      font-weight:800;
      color:${props=>props.theme.text}
  }
  span{
      height:1rem;
      width:1rem;
      background:${props=>props.theme.red};
      margin: 0 4px;
      display:inline-block;
      position: relative;
      bottom:2px;
      border-radius:100%;
  }
`
export const Menu = styled.div`
  button{
      background:none;
      outline:none;
      border:none;
      padding:21px;
      transform-origin:center;

      span{
          height:8px;
          width:35px;
          display:block;
          background:${props=>props.theme.text};
          margin:8px;
          border-radius:2px;
      }
  }
`