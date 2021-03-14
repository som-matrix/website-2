import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Container, Flex } from "../../styles/globalStyles"
import {
  HomeFeatureSection,
  FeaturedContent,
  FeaturedVideo,
  FeaturedProject,
} from "../../styles/homeStyles"
const HomeFeature = ({ onCursor }) => {
  const [hovered, setHovered] = useState(false)
  const animation = useAnimation()
  const [featureRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-350px",
  })
  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [inView, animation])
  return (
    <HomeFeatureSection
      ref={featureRef}
      initial="hidden"
      animate={animation}
      variants={{
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: [0.6, 0.5, -0.01, 0.6],
          },
        },
        hidden: {
          y: 48,
          opacity: 0,
        },
      }}
      
    >
      <Container>
        <Link>
          <FeaturedContent
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Flex spaceBetween>
              <h3>Featured Project</h3>
              <motion.div
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
                className="meta"
              >
                <h4>PEI Seafood</h4>
                <h4>2021</h4>
              </motion.div>
            </Flex>
            <h2 className="featured-title">
              NOT <br /> HUMBLE
              <span className="arrow">
                <motion.svg
                  animate={{ x: hovered ? 48 : 0 }}
                  transition={{ duration: 0.3, ease: [0.6, 0.05, -0.01, 0.9] }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 101 57"
                >
                  <path
                    d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                    fill="#FFF"
                    fillRule="evenodd"
                  ></path>
                </motion.svg>
              </span>
            </h2>
          </FeaturedContent>
          <FeaturedVideo>
            <video
              src={require("../../assets/video/featured-video.mp4")}
              loop
              muted
              autoPlay
            ></video>
          </FeaturedVideo>
        </Link>
      </Container>
      <Container>
        <FeaturedProject
          onMouseEnter={() => onCursor("pointer")}
          onMouseLeave={onCursor}
        >
          <Flex flexEnd>
            <button>
              <span>All Projects</span>
            </button>
          </Flex>
        </FeaturedProject>
      </Container>
    </HomeFeatureSection>
  )
}

export default HomeFeature
