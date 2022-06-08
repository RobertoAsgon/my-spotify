import styled from 'styled-components'

const RootNavbarContainerBg = styled.div`
  grid-area: nav-bar;
  display: flex;
  background-color: #000;
  .navbar-logo {
    margin: 22px;
  }
`
const NavbarResizer = styled.hr`
  border: 3px solid transparent;
  cursor: col-resize;
  background: linear-gradient(hsla(0, 0%, 100%, 0.5), hsla(0, 0%, 100%, 0.5))
    no-repeat 50%/1px 100%;
  transition: all 100ms;
  opacity: 0;
  :hover {
    opacity: 1;
  }
`

const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .menuItem {
    margin: 4px;
  }
  .navbar-playlist-items {
    margin-top: 24px;
  }
  hr {
    opacity: 0.2;
    margin: 0 18px;
  }
  .navbar-playlists {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
  }
  .navbar-install-app {
  }
`

interface PlaylistUlContainerProps {
  $maxHeight: string
}

const PlaylistUlContainer = styled.ul<PlaylistUlContainerProps>`
  padding-top: 6px;
  padding-left: 14px;
  list-style-type: none;
  overflow: auto;
  max-height: ${(props) => props.$maxHeight};

  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-thumb {
    background: #505458;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #797b7d;
  }
  li {
    color: #b3b3b3;
    padding: 8px;
    font-size: 14px;
    :hover {
      color: white;
    }
  }
`

export {
  RootNavbarContainerBg,
  NavbarContainer,
  NavbarResizer,
  PlaylistUlContainer
}
