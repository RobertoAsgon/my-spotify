import styled from 'styled-components'
import { SVGImage } from '../CustomSVG/styles'

const MenuItemTitle = styled.span`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: normal;
  line-height: 16px;
  text-transform: none;
  margin-top: 4px;
  margin-left: 12px;
`

interface MenuItemContainerProps {
  $isActive: boolean
  $hasBackground: boolean
}

const MenuItemContainer = styled.a<MenuItemContainerProps>`
  display: flex;
  align-items: center;
  border-radius: 4px;
  width: auto;
  padding: 0 16px;
  height: 40px;
  cursor: pointer;
  transition: all 200ms;
  color: ${(props) => (props.$isActive ? '#fff' : '#b3b3b3')};
  :hover {
    ${MenuItemTitle} {
      transition: all 200ms;
      color: white;
    }
  }

  ${(props) => {
    if (props.$hasBackground) {
      return `
        background-color: ${props.$isActive ? '#282828' : '#000'};
      `
    } else {
      if (props.className && props.className.includes('createPlaylist')) {
        return `
        ${SVGImage} {
          padding: 2px;
          background-color: ${props.$isActive ? '#fff' : '#b3b3b3'};
        }
      `
      } else if (props.className && props.className.includes('likedSongs')) {
        return `
          ${SVGImage} {
            padding: 2px;
            background: rgb(147,29,226);
            background: linear-gradient(135deg, rgba(147,29,226,1) 0%, rgba(74,171,191,1) 100%);
        `
      }
    }
  }}
`

export { MenuItemContainer, MenuItemTitle }
