import styled,{css} from 'styled-components'
import {motion} from 'framer-motion'

export const FooterSection = styled(motion.div)`
height:300px;
margin-top:296px;
`
export const FooterContent= styled.div`
 font-size:1.8rem;
 font-weight:600;
 color: ${props=>props.theme.red};
 line-height:0.5rem;
 flex:1;
 ${props=>props.wider && css`
   flex:2
 `}
`

export const FooterSocial = styled.div`
 display:flex;
 position:relative;
 a{
     position:relative;
     display:block;
     height:24px;
     width:24px;
     padding:8px;

     svg{
         height:100%;
         width:100%;
     }
 }
`