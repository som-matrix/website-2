import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Banner = styled.div`
 height:100vh;
 width:100%;
 background: ${props=>props.theme.background};
 position:relative;
 margin-bottom:296px;
`
export const Video =styled.div`
 height:100%;
 width:100%;

  video{
    object-fit:cover;
  }
`
export const Canvas = styled.canvas`
 position:absolute;
 top:0;
 left:0;
 height:100%;
 display:block;
`
export const BannerTitle = styled(motion.h1)`
 position:absolute;
 bottom:-118px;
 left:-20px;
 color:${props=>props.theme.text};
 pointer-events:none;
`
export const Headline = styled(motion.span)`
 display:block;
 font-size:20rem;
 font-weight:900;
 line-height:0.76
`
export const HomeContentSection = styled(motion.div)`
 margin-bottom:200px;
`

export const Content = styled.h2`
 font-size:2.5rem;
 width:55%;
 color: ${props=>props.theme.text};
`
export const HomeFeatureSection = styled(motion.div)`
 margin-bottom:200px;
 position:relative;
 display:block;
 a{
   margin-bottom:200px;
   display:block;
   position:relative;
 }
`

export const FeaturedContent = styled(motion.div)`
 height:480px;
 width:100%;
 box-sizing:border-box;
 color: ${props=>props.theme.text};
 padding:56px 124px;
 h3{
   font-size:1.4rem;
 }
 .meta{
   display:flex;
   h4{
     &:last-child{
       margin-left:1rem
     }
   }
 }
 .featured-title{
   position:absolute;
   bottom:-128px;
   font-size:7rem;
   font-weight:900;
   line-height:90px;
   margin:0;
   .arrow{
     position:relative;
     height:80px;
     width:120px;
     overflow:hidden;
     display:block;
     svg{
       position:absolute;
       top:16px;
       left:-48px;
       width:108px;
       path{
         fill: ${props=>props.theme.text};
       }
     }
   }
 }
`

export const FeaturedVideo = styled.div`
 position:absolute;
 width:100%;
 height:408px;
 top:0;
 display:block;
 z-index:-1;
 overflow:hidden;
`

export const FeaturedProject = styled.div`
 margin-top:200px;
 button{
   background: ${props=>props.theme.red};
   padding:20px;
   display:block;
   color:#fff;
   text-align:left;
   position:relative;
   line-height:1;
   font-weight:600;
   border:none;
   font-size:1.4rem;
   span{
     margin-right:100px;
     display:block;
   }
   &::before,&::after{
     content:"";
     position:absolute;
     top:50%;
     right:20px;
     width:35px;
     height:7px;
     background: #fff;
     transform:translateY(-50%);
   }
   &::before{
     margin-top:-8px;
   }
   &::after{
     margin-top:8px;
   }
 }
`
/* About Section */
export const HomeAboutSection = styled(motion.div)`

`

export const About = styled.div`
width:100%;
h2{
  font-size:2rem;
  font-weight:400;
  color:${props=>props.theme.text};
  width:60%;
  margin-left:124px;
}
p{
    font-size:1rem;
    color:${props=>props.theme.text};
    margin-left:124px;
    line-height:1.2;
    max-width:440px;
  }
`

export const Services = styled.div`
 h3{
   font-size:1.5rem;
   color: ${props=>props.theme.text};
 }
`

/* Accordion Section */
export const AccordionHeader = styled(motion.div)`
 width:100%;
 height:32px;
 display:flex;
 align-items:center;
 color: ${props=>props.theme.red};
 margin: 8px 0;
 font-weight:600;
 font-size:1.15rem;
`

export const AccordionIcon = styled.div`
 display:flex;
 align-items:center;
 height:100%;
 margin-right:8px;
 span{
   height:4px;
   width:18px;
   background: ${props=>props.theme.red};
   transition: .1s ease-in-out;
 }
`

export const AccordionContent = styled(motion.div)`
 overflow:hidden;
 padding-left:48px;
 span{
   margin: 8px 0;
   display:block;
   font-size:0.875rem;
   font-weight:300;
   width:100%;
   color: ${props=>props.theme.red};  
 }
`