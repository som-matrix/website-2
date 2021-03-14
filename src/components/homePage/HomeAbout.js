import React, { useState, useEffect } from "react"
import { motion,useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Container, Flex } from "../../styles/globalStyles"
import {
  HomeAboutSection,
  About,
  Services,
  AccordionHeader,
  AccordionIcon,
  AccordionContent,
} from "../../styles/homeStyles"
import {useGlobalState} from '../../context/globalContext'
const accordionId = [
  {
    id: 0,
    title: "Pre-Production",
    results: [
      "Creative Development",
      "Writing",
      "Storyboards",
      "Art Direction",
      "Creative Direction",
      "Location Scouting",
      "Casting",
    ],
  },
  {
    id: 1,
    title: "Video Production",
    results: [
      "Principle Photography",
      "Production Management",
      "Crew",
      "Dailies",
      "LTO-Archiving",
    ],
  },
  {
    id: 2,
    title: "Post-production",
    results: [
      "Colour correction",
      "Offline editing",
      "Online editing",
      "VFX",
      "Animation and motion graphics",
      "Closed captioning and subtitles",
      "Descriptive video",
      "Dailies",
      "Quality control",
      "LTO Archiving",
    ],
  },
  {
    id: 3,
    title: "Audio Post-production",
    results: [
      "We work with some amazing partners who provide",
      "Sound Design",
      "SFX",
      "Music",
      "Sound Mix",
    ],
  },
]
const HomeAbout = () => {
  const [expanded, setExpanded] = useState(0)
  const animation = useAnimation()
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  })
  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [inView, animation])
  return (
    <HomeAboutSection
      ref={aboutRef}
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
          y: 72,
          opacity: 0,
        },
      }}
    >
      <Container>
        <Flex alignTop>
          <About>
            <h2>
              Furrow is an integrated, full-service creative studio offering
              video production, creative development, and post-production
              services.
            </h2>
            <p>
              Everybody’s got a story. And we don’t stop until we’ve uncovered
              what makes yours worth telling. Whether it’s working directly with
              you, an agency partner, or putting the finishing touches on
              something special, we’re ready to dig in and get our hands
              dirty—are you? Services Principle Photography Production
              Management Crew Dailies LTO-Archiving
            </p>
          </About>
          <Services>
            <h3>Services</h3>
            {accordionId.map((details, index) => (
              <Accordion
                key={index}
                details={details}
                expanded={expanded}
                setExpanded={setExpanded}
                // onMouseEnter={()=>onCursor("hovered")}
                // onMouseLeave={onCursor}
              />
            ))}
          </Services>
        </Flex>
      </Container>
    </HomeAboutSection>
  )
}

const Accordion = ({ details, expanded, setExpanded}) => {
  const isOpen = details.id === expanded
  const [hovered,setHovered] = useState(false)
  const {currentTheme} = useGlobalState()
  return (
    <>
      <AccordionHeader
        onClick={() => setExpanded(isOpen ? false : details.id)}
        transition={{ duration: 0.2, ease: [0.6, 0.5, -0.01, 0.9] }}
        onHoverStart={()=>setHovered(!hovered)}
        onHoverEnd={()=>setHovered(!hovered)}
        whileHover={{
            color: currentTheme === 'dark'? "#ffffff" : "#000000"
        }}
      >
        <AccordionIcon>
          <motion.span
            transition={{ duration: 0.2, ease: [0.6, 0.5, -0.01, 0.9] }}
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
          ></motion.span>
          <motion.span
            transition={{ duration: 0.2, ease: [0.6, 0.5, -0.01, 0.9] }}
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
          ></motion.span>
        </AccordionIcon>
        {details.title}
      </AccordionHeader>
      <AccordionContent
        key="cotnent"
        animate={{ height: isOpen ? "100%" : "0" }}
        transition={{duration:0.8,ease:[0.6,0.5,-0.01,0.9]}}
      >
        {details.results.map((result, index) => (
          <span key={index}>{result}</span>
        ))}
      </AccordionContent>
    </>
  )
}
export default HomeAbout
