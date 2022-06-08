import styled from 'styled-components'

interface RootContainerBgProps {
  navBarWidth: number
  $isActiveResizer: boolean
}

const RootContainerBg = styled.div<RootContainerBgProps>`
  user-select: none;
  display: grid;
  grid-template-areas:
    'nav-bar main-view'
    'playing-bar playing-bar';
  grid-template-rows: calc(100vh - 90px) 90px;
  grid-template-columns: ${({ navBarWidth }) => `${navBarWidth}px`};
`

const MainViewContainer = styled.div`
  grid-area: main-view;
  display: grid;
  grid-template-areas:
    'top-user-bar'
    'main-user-view';
  grid-template-rows: 60px calc(100vh - 150px);
  background-color: #292929;
`

const TopUserBar = styled.div`
  grid-area: top-user-bar;
`

const MainUserView = styled.div`
  grid-area: main-user-view;
`

const PlayingBarContainer = styled.div`
  grid-area: playing-bar;
  border: 5px solid blue;
`

export {
  RootContainerBg,
  MainViewContainer,
  PlayingBarContainer,
  TopUserBar,
  MainUserView
}
