import React from 'react'
import {
  AlbumContainer,
  AlbumImage,
  AlbumTitle,
  AlbumDescription,
  Container
} from './styles'

interface AlbumProps {
  imageSource?: string
  albumTitle?: string
  albumDescription?: string
}

const Album: React.FC<AlbumProps> = ({
  imageSource,
  albumTitle,
  albumDescription
}) => (
  <AlbumContainer>
    <AlbumImage src={imageSource} alt="album img"></AlbumImage>
    <Container>
      <AlbumTitle>{albumTitle}</AlbumTitle>
      <AlbumDescription>{albumDescription}</AlbumDescription>
    </Container>
  </AlbumContainer>
)

export default Album
