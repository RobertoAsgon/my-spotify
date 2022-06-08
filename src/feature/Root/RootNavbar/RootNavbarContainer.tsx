import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { PAGES_URL } from '../../../services/Constants'
import { LogoSpotify } from '../../../shared/assets'
import { CustomSVG, MenuItem } from '../../../shared/components'
import { MENU_ITEM_VARIANT } from '../../../shared/components/MenuItem/MenuItem'
import { RootContainerContext } from '../RootContainerContextProvider'
import {
  NavbarContainer,
  NavbarResizer,
  PlaylistUlContainer,
  RootNavbarContainerBg
} from './styles'
interface RootNavbarContainerProps {
  onActiveResize: (value: boolean) => void
}

const RootNavbarContainer: React.FC<RootNavbarContainerProps> = ({
  onActiveResize
}) => {
  const { dataPlaylist } = useContext(RootContainerContext)
  const [playListHeight, setPlaylistHeight] = useState('unset')
  const router = useRouter()

  const isMenuItemActive = (currentRoute: PAGES_URL) =>
    router.pathname === currentRoute

  useEffect(() => {
    document.addEventListener('mouseup', () => onActiveResize(false))
    return () =>
      document.removeEventListener('mouseup', () => onActiveResize(false))
  }, [onActiveResize])

  const handleOverflowResize = () => {
    const elementHr = window.document.getElementById('playlist-divider')
    const elementBar = window.document.getElementById('playing-bar')
    const maxHeight =
      elementHr && elementBar
        ? `${
            elementBar?.getBoundingClientRect().top -
            elementHr?.getBoundingClientRect().top -
            50
          }px`
        : 'unset'
    setPlaylistHeight(maxHeight)
  }

  useEffect(() => {
    handleOverflowResize()
    window.addEventListener('resize', handleOverflowResize)
    return () => {
      window.removeEventListener('resize', handleOverflowResize)
    }
  }, [])

  return (
    <RootNavbarContainerBg>
      <NavbarContainer>
        <div className="navbar-logo">
          <CustomSVG width={124} htmlColor={'white'}>
            <LogoSpotify />
          </CustomSVG>
        </div>
        <div className="navbar-items">
          <MenuItem
            isActive={isMenuItemActive(PAGES_URL.INDEX)}
            variant={MENU_ITEM_VARIANT.BEGINNING}
          />

          <MenuItem
            isActive={isMenuItemActive(PAGES_URL.SEARCH)}
            variant={MENU_ITEM_VARIANT.SEARCH}
          />

          <MenuItem
            isActive={isMenuItemActive(PAGES_URL.YOUR_LIBRARY)}
            variant={MENU_ITEM_VARIANT.YOUR_LIBRARY}
          />
        </div>
        <div className="navbar-playlist-items">
          <MenuItem
            isActive={isMenuItemActive(PAGES_URL.CREATE_PLAYLIST)}
            variant={MENU_ITEM_VARIANT.CREATE_PLAYLIST}
          />
          <MenuItem
            isActive={isMenuItemActive(PAGES_URL.LIKED_SONGS)}
            variant={MENU_ITEM_VARIANT.LIKED_SONGS}
          />
        </div>
        <hr id="playlist-divider" />
        <div
          className="navbar-playlists"
          style={{
            maxHeight: playListHeight
          }}
        >
          <PlaylistUlContainer $maxHeight={playListHeight}>
            {dataPlaylist?.map((list) => {
              return <li key={list.id}>{list.name}</li>
            })}
            {dataPlaylist?.map((list) => {
              return <li key={list.id}>{list.name}</li>
            })}
          </PlaylistUlContainer>
        </div>
        <div className="navbar-install-app">
          <MenuItem isActive={false} variant={MENU_ITEM_VARIANT.INSTALL_APP} />
        </div>
      </NavbarContainer>
      <NavbarResizer
        onMouseDown={() => onActiveResize(true)}
        onMouseUp={() => onActiveResize(false)}
      />
    </RootNavbarContainerBg>
  )
}

export default RootNavbarContainer
