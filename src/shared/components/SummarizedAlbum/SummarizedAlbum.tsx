import React from 'react'
import {
  SummarizedAlbumContainer,
  SummarizedAlbumImage,
  SummarizedAlbumTitle
} from './styles'

interface SummarizedAlbumProps {
  imageSource?: string
  summarizedAlbumTitle?: string
}

const SummarizedAlbum: React.FC<SummarizedAlbumProps> = ({
  imageSource,
  summarizedAlbumTitle
}) => (
  <SummarizedAlbumContainer>
    <SummarizedAlbumImage
      src={imageSource}
      alt="album img"
    ></SummarizedAlbumImage>
    <SummarizedAlbumTitle>{summarizedAlbumTitle}</SummarizedAlbumTitle>
  </SummarizedAlbumContainer>
)

export default SummarizedAlbum
