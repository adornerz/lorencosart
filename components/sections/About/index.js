import React from 'react'
import { AboutElem, AboutText, ImgContainer } from './AboutElements'
import { Colorful, Heading } from '../../Texts'
import { SectionContainer } from '../SectionContainer'
import { SectionWrapper } from '../SectionWrapper'
import Image from 'next/image'
import data from './about.data'

const AboutSection = () => {
    return (
        <SectionContainer id='about'>
            <SectionWrapper>
                <Heading>
                <Colorful>
                    About Me
                </Colorful>
                </Heading>
                {
                    data.map(({image, title, body}, i) => (
                        <AboutElem key={i}>
                        {/* <ImgContainer>
                            <Image src={`/assets/images/${image}`} layout='fill' />
                        </ImgContainer> */}
                        <AboutText>
                            <Heading> {title} </Heading>
                            {body}
                        </AboutText>
                    </AboutElem>
                    ))
                }
            </SectionWrapper>
        </SectionContainer>
    )
}

export default AboutSection