import Image from 'next/image'
import React from 'react'
import { Colorful, Heading } from '../../Texts'
import { ImgContainer, Gallery } from './ArtGalleryElements'
import { SectionContainer } from '../SectionContainer'
import { SectionWrapper } from '../SectionWrapper'
import images from './artGallery.data'
const ArtGallerySection = () => {
    return (
        <SectionContainer id='art-gallery'>
            <SectionWrapper>
                <Heading>
                    <Colorful>
                        My Art
                    </Colorful>
                </Heading>
                <Gallery>
                    {
                        images.map(({ src, width, height }, i) => (
                            <ImgContainer width={width} height={height} key={i}>
                                <Image src={`/assets/images/${src}`} layout='fill' objectFit='cover' className={{cursor: 'pointer'}} alt=''/>
                            </ImgContainer>
                        ))
                    }
                </Gallery>
            </SectionWrapper>
        </SectionContainer>
    )
}

export default ArtGallerySection