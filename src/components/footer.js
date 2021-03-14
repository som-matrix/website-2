import React from 'react'
// Styled components
import {Container,Flex} from '../styles/globalStyles'
// Icons
import {Instagram,Facebook,Vimeo} from '../assets/svg/social-icons'
// Footer Styles
import {FooterSection,FooterContent,FooterSocial} from '../styles/footerStyles'
const Footer = ({onCursor}) => {
    return (
        <FooterSection>
            <Container>
                <Flex spaceBetween>
                    <FooterContent>
                        <p>215.32.6985</p>
                        <p>info@mail.com</p>
                    </FooterContent>
                    <FooterContent wider>
                        <p>Talcher,Odisha</p>
                        <p>Colony Street</p>
                    </FooterContent>
                    <FooterSocial>
                        <a href="/" onMouseEnter={()=>onCursor("hovered")} onMouseLeave={onCursor}>
                            <Instagram/>
                        </a>
                        <a href="/" onMouseEnter={()=>onCursor("hovered")} onMouseLeave={onCursor}>
                            <Facebook/>
                        </a>
                        <a href="/" onMouseEnter={()=>onCursor("hovered")} onMouseLeave={onCursor}>
                            <Vimeo/>
                        </a>
                    </FooterSocial>
                </Flex>
            </Container>
        </FooterSection>
    )
}

export default Footer
