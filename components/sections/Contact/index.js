import React from 'react'
import { SectionContainer } from '../SectionContainer'
import { SectionWrapper } from '../SectionWrapper'
import { Heading, Colorful, UnderText } from '../../Texts'
import { ContactWrapper, InstagramIcon, FiverrIcon, DiscordIcon } from './ContactElements'
import Link from 'next/link'
const ContactSection = () => {
    return (
        <SectionContainer id='contact'>
            <SectionWrapper>
                <Heading>
                    <Colorful>
                        Contact
                    </Colorful>
                </Heading>
                <Link href='https://instagram.com/lorencos.art' passHref>
                    <ContactWrapper>
                        <InstagramIcon />
                        <UnderText>
                            lorencos.art
                        </UnderText>
                    </ContactWrapper>

                </Link>
                <ContactWrapper>
                    <FiverrIcon />
                    <UnderText>
                        [Deleted for now]
                    </UnderText>
                </ContactWrapper>
                <ContactWrapper>
                    <DiscordIcon />
                    <UnderText>
                        lorenco#3337
                    </UnderText>
                </ContactWrapper>
            </SectionWrapper>
        </SectionContainer>
    )
}

export default ContactSection