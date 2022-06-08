import styled from 'styled-components'

const PlayContainer = styled.button`
  width: 40px;
  height: 40px;
  background-color: #1db954;
  cursor: pointer;

  border-radius: 500px;
  box-shadow: 0 8px 8px rgb(0 0 0 / 30%);
  border: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    transform: scale(1.06);
  }
`

export { PlayContainer }
