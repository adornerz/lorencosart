import styled from 'styled-components'

export const ArtGalleryContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0;
    padding: 20px 0;
`

export const ArtGalleryWrapper = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.17);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.5px);
    -webkit-backdrop-filter: blur(9.5px);
    padding: 40px;
`

export const Gallery = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-auto-rows: 200px 400px;
    grid-gap: 10px;
    grid-auto-flow: dense;

    @media screen and (max-width:500px){
        grid-template-columns: repeat(1, 1fr);
    }

`

export const GalleryItem = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

export const ImgContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    object-fit: cover;
    object-position: 50% 50%;
    cursor: pointer;
    border-radius: 0px;
    grid-column: span ${props => props.width};
    grid-row: span ${props => props.height};

    @media screen and (max-width:500px){
        grid-column: 1;
        grid-row: span 1;
    }

`

export const ImgText = styled.h1`
    font-size: 16px;
`

export const ImgStyling = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: '50% 50%',
}