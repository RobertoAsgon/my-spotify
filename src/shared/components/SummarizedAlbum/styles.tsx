import styled from 'styled-components'

const SummarizedAlbumContainer = styled.div`
  display: flex;

  align-items: center;
  width: 304px;
  height: 80px;
  border-radius: 4px;
  background-color: #181818;

  transition: background-color 0.4s ease;

  :hover {
    background-color: #313131;
    cursor: pointer;
  }
`

const SummarizedAlbumImage = styled.img`
  background-color: #333;
  box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
  width: 80px;
  height: 100%;
  border-radius: 4px 0 0 4px;
`

const SummarizedAlbumTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: normal;
  line-height: 24px;
  text-transform: none;
  color: #fff;
  margin-left: 16px;
`

export { SummarizedAlbumContainer, SummarizedAlbumImage, SummarizedAlbumTitle }
