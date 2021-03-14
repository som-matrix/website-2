import React,{useEffect} from 'react'
import {useInView} from 'react-intersection-observer'
import {useAnimation} from 'framer-motion'
import {Container} from '../../styles/globalStyles'
import {HomeContentSection,Content} from '../../styles/homeStyles'
const HomeContent = () => {
    const [refComponent,inView] = useInView({
        triggerOnce:true,
        rootMargin:'-300px'
    })
    const animation = useAnimation()
    useEffect(()=>{
        if (inView){
            animation.start("visible")
        }
    },[animation,inView])
    return (
        <HomeContentSection
         ref={refComponent}
         initial="hidden"
         animate={animation}
         variants={{
             visible:{
                 y:0,
                 opacity:1,
                 transition:{
                     duration:0.5,
                     ease:[0.6,0.05,-0.01,0.9]
                 }
             },
             hidden:{
                 opacity:0,
                 y:72
             }
         }}>
            <Container>
                <Content>
                 Great stories don’t just happen—they need to be uncovered. And we dig deep to discover the great stories that lie just below the surface.
                 Dirt under our fingernails and all.
                </Content>
            </Container>
            
        </HomeContentSection>
    )
}

export default HomeContent
