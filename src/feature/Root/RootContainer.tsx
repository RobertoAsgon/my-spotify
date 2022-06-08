import React, { ReactNode, useEffect, useState } from 'react'
import PrivateRoute from '../../shared/components/PrivateRoute/PrivateRoute'
import { RootContainerProvider } from './RootContainerContextProvider'
import RootNavbarContainer from './RootNavbar/RootNavbarContainer'

import {
  RootContainerBg,
  MainViewContainer,
  PlayingBarContainer
} from './styles'
interface RootContainerProps {
  children: ReactNode
}

const RootContainer: React.FC<RootContainerProps> = ({ children }) => {
  const [navBarWidth, setNavBarWidth] = useState<number>(
    parseInt((process.browser && localStorage.getItem('navBarWidth')) || '300')
  )
  const [isActiveResizer, setIsActiveResize] = useState<boolean>(false)

  const handleNavBarResize = (width: number) =>
    isActiveResizer && width >= 130 && width <= 400 && setNavBarWidth(width)

  useEffect(() => {
    process.browser &&
      localStorage.setItem('navBarWidth', navBarWidth.toString())
  }, [navBarWidth])

  return (
    <PrivateRoute>
      <RootContainerProvider>
        <RootContainerBg
          $isActiveResizer={isActiveResizer}
          navBarWidth={navBarWidth}
          onMouseMove={(event) => handleNavBarResize(event.pageX)}
        >
          <RootNavbarContainer
            onActiveResize={(value) => setIsActiveResize(value)}
          />
          <MainViewContainer>{children}</MainViewContainer>
          <PlayingBarContainer id="playing-bar" />
        </RootContainerBg>
      </RootContainerProvider>
    </PrivateRoute>
  )
}

export default RootContainer
