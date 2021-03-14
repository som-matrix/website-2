import React, { useState } from "react" //to be used useRef
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
// Import global Styles
import { Container, Flex } from "../styles/globalStyles"
// customHook for locking
// import useElementPosition from '../hooks/useElementPosition'
// Import navigationstyles
import {
  Nav,
  NavHeader,
  CloseNav,
  NavList,
  NavFooter,
  NavVideo,
} from "../styles/navigationStyles"
import { FooterContent, FooterSocial } from "../styles/footerStyles"
// Icons
import {Instagram,Facebook,Vimeo} from '../assets/svg/social-icons'
// NavRoutes
const navRoutes = [
  {
    id: 0,
    title: "not humble",
    path: "/not-humble",
    video: "featured-video.mp4",
  },
  { id: 1, title: "bleeping easy", path: "/bleeping-easy", video: "easy.mp4" },
  {
    id: 2,
    title: "make it zero",
    path: "/make-it-zero",
    video: "make-it-zero.mp4",
  },
  {
    id: 3,
    title: "it taskes an island",
    path: "/it-takes-an-island",
    video: "it-takes-an-island.mp4",
  },
  { id: 4, title: "50 beaches", path: "/50-beaches", video: "50-beaches.mp4" },
]
const Navigation = ({
  toggleMenu,
  setToggleMenu,
  onCursor,
  setHoveredPosition,
}) => {
  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: "featured-video.mp4",
    key: "0",
  })
  // const closeMenu = useRef(null)
  // const position = useElementPosition(closeMenu)
  // const closeMenuHover = ()=>{
  //   onCursor('locked')
  //   setHoveredPosition({x:position.x + 10.8,y:position.y})
  // }
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {toggleMenu && (
          <Nav
            initial={{ x: "-100%" }}
            exit={{ x: "-100%", transition: { duration: 0.8 } }}
            animate={{ x: toggleMenu ? "0%" : "-100%" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  <h2>Projects</h2>
                  <CloseNav
                    // ref={closeMenu}
                    onClick={() => setToggleMenu(!toggleMenu)}
                    onMouseEnter={() => onCursor("pointer")}
                    // onMouseEnter={closeMenuHover}
                    onMouseLeave={onCursor}
                  >
                    <button>
                      <span className="line1"></span>
                      <span className="line2"></span>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <NavList>
                <ul>
                  {navRoutes.map((route) => (
                    <motion.li
                      key={route.id}
                      onHoverStart={() => {
                        setRevealVideo({
                          show: true,
                          video: route.video,
                          key: route.id,
                        })
                      }}
                      onMouseEnter={() => onCursor("pointer")}
                      onHoverEnd={() => {
                        setRevealVideo({
                          show: false,
                          video: route.video,
                          key: route.id,
                        })
                      }}
                      onMouseLeave={onCursor}
                    >
                      <Link to={`/projects/${route.path}`}>
                        <motion.div
                          initial={{ x: -108 }}
                          whileHover={{
                            x: -40,
                            transition: {
                              duration: 0.3,
                              ease: [0.6, 0.05, -0.01, 0.9],
                            },
                          }}
                          className="link"
                        >
                          <span className="arrow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 101 57"
                            >
                              <path
                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                fill="#FFF"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                            {route.title}
                          </span>
                        </motion.div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </NavList>
              <NavFooter>
                <Flex spaceBetween>
                  <FooterContent>
                    <p>info@furrow.studio</p>
                  </FooterContent>
                  <FooterContent wider>
                    <p>6325.325.5545</p>
                  </FooterContent>
                  <FooterSocial>
                    <a
                      href="/"
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                    >
                      <Instagram />
                    </a>
                    <a
                      href="/"
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                    >
                      <Facebook />
                    </a>
                    <a
                      href="/"
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                    >
                      <Vimeo />
                    </a>
                  </FooterSocial>
                </Flex>
              </NavFooter>
              <NavVideo>
                <motion.div
                  animate={{ width: revealVideo.show ? "0%" : "100%" }}
                  className="reveal"
                ></motion.div>
                <div className="video">
                  <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.video
                      key={revealVideo.key}
                      src={require(`../assets/video/${revealVideo.video}`)}
                      loop
                      autoPlay
                      muted
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.2, ease: "easeInOut" },
                      }}
                    ></motion.video>
                  </AnimatePresence>
                </div>
              </NavVideo>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
