import styled from 'styled-components'
import {motion} from 'framer-motion'
export const Nav = styled(motion.div)`
 position:fixed;
 top:0;
 left:0;
 height:100%;
 width:100%;
 display:block;
 z-index:100;
 background: ${props=>props.theme.red};
 color:#000;
 overflow:hidden;
`
export const NavHeader = styled.div`
 top:72px;
 position:relative;
 h2{
     color: ${props=>props.theme.background};
 }
`
export const CloseNav = styled.div`
  button{
      transform-origin:center;
      background:none;
      outline:none;
      border:none;
      padding:20px;
      span{
          display:block;
          width:35px;
          height:8px;
          background: ${props=>props.theme.background};
          margin:8px;
      }
      .line1{
        transform: rotate(-45deg) translate(-.5px ,13px);
      }
      .line2{
        transform: rotate(45deg) translate(-.5px, -13px);
      }
  }
`
export const NavList = styled.div`
 height:100%;
 width:100%;
 display:flex;
 align-items:center;
 ul{
     padding:0;
     li{
         text-transform:uppercase;
         font-size:4.5rem;
         font-weight:bolder;
         list-style:none;
         line-height:96px;
         height:96px;
         overflow:hidden;
         .link{
            color: ${props=>props.theme.background};
            display:flex;
            align-items:center;
            position:relative;
            .arrow{
                
                svg{
                    width:100px;
                    height:45px;
                    margin-right:8px;
                    path{
                        fill: ${props=>props.theme.background};
                    }
                }
            }
         }
     }
 }
`
export const NavFooter = styled.div`
position:absolute;
bottom:0;
left:0;
width:100%;
padding:56px 0;
p{
    color: ${props=>props.theme.background};
}
svg path{
    fill: ${props=>props.theme.background};
}
`
export const NavVideo = styled.div`
 position:absolute;
 top:0;
 left:25%;
 bottom:0;
 z-index:-1;
 height:100%;
 width:100%;
 background:#000;
 .reveal{
     width:100%;
     position:absolute;
     top:0;
     left:0;
     bottom:0;
     background:${props=>props.theme.red};
 }
 .video{
     position:absolute;
     background:#000;
     height:100%;
     margin:0;
     z-index:-1;
     video{
         height:100%;
     }
 }
`