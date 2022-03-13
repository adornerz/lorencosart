import React, {useState} from 'react'
import { Button } from '../../Button'
import { SectionContainer } from '../SectionContainer'
import { SectionWrapper } from '../SectionWrapper'

import { 
    ArrowRight
     } from './HeroElements'
import { Heading, Colorful, UnderText } from '../../Texts'
const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
      setHover(!hover);
    }
  return (
    <>
        <SectionContainer id = 'home' mrTop='100px'>
            <SectionWrapper>
                <Heading>
                    <Colorful>
                    Hi, I&apos;m Lorenco!
                    </Colorful>
                </Heading>
                <UnderText>
                    A self taught guitar player, astronaut,
                    firefighter, REF Fighter and artist!
                </UnderText>
                <Button onMouseEnter={onHover} onMouseLeave={onHover} to='about' smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                    Learn More <ArrowRight hover={hover}/> 
                </Button>
            </SectionWrapper>
        </SectionContainer>
    </>
  )
}

export default HeroSection