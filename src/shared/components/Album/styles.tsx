import styled from 'styled-components'

const AlbumContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 224px;
  height: 302px;
  background-color: #181818;
  border-radius: 4px;
  padding: 16px;

  transition: background-color 0.4s ease;

  :hover {
    background-color: #282828;
    cursor: pointer;
  }
`

const AlbumImage = styled.img`
  background-color: #333;
  box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
  width: 100%;
  border-radius: 2px;
`

const AlbumTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: normal;
  line-height: 24px;
  text-transform: none;
  color: #fff;
  margin-bottom: 6px;
`

const AlbumDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 16px;
  text-transform: none;
  color: rgb(179, 179, 179);
`

const Container = styled.div`
  margin-bottom: 8px;
`

export { AlbumContainer, AlbumImage, AlbumTitle, AlbumDescription, Container }
