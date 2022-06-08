import React, { ReactNode } from 'react'
import {
  Download,
  Heart,
  Home,
  HomeOutlined,
  Library,
  Plus,
  Search
} from '../../assets'
import CustomSVG from '../CustomSVG/CustomSVG'
import { MenuItemContainer, MenuItemTitle } from './styles'
import Link from 'next/link'
import { PAGES_URL } from '../../../services/Constants'

export enum MENU_ITEM_VARIANT {
  BEGINNING = 'beginning',
  SEARCH = 'search',
  YOUR_LIBRARY = 'library',
  CREATE_PLAYLIST = 'createPlaylist',
  LIKED_SONGS = 'likedSongs',
  INSTALL_APP = 'installApp'
}

interface MenuItemProps {
  variant: string
  isActive: boolean
}

interface variantTypesProps {
  [key: string]: VariantType
}

class VariantType {
  constructor(
    public icon: ReactNode,
    public activeIcon: ReactNode,
    public label: string,
    public url: PAGES_URL,
    public hasBackground: boolean
  ) {}
}

const MenuItem: React.FC<MenuItemProps> = ({ variant, isActive }) => {
  const handleVariantTypes = () => {
    const variantTypes: variantTypesProps = {
      beginning: new VariantType(
        <Home />,
        <HomeOutlined />,
        'Início',
        PAGES_URL.INDEX,
        true
      ),
      search: new VariantType(
        <Search />,
        <Search />,
        'Buscar',
        PAGES_URL.SEARCH,
        true
      ),
      library: new VariantType(
        <Library />,
        <Library />,
        'Sua Biblioteca',
        PAGES_URL.YOUR_LIBRARY,
        true
      ),
      createPlaylist: new VariantType(
        <Plus />,
        <Plus />,
        'Criar playlist',
        PAGES_URL.CREATE_PLAYLIST,
        false
      ),
      likedSongs: new VariantType(
        <Heart />,
        <Heart />,
        'Músicas Curtidas',
        PAGES_URL.LIKED_SONGS,
        false
      ),
      installApp: new VariantType(
        <Download />,
        <Download />,
        'Instalar aplicativo',
        PAGES_URL.LIKED_SONGS,
        false
      )
    }

    return variantTypes[variant]
  }
  const colorSVG =
    variant === MENU_ITEM_VARIANT.CREATE_PLAYLIST
      ? '#000'
      : isActive
      ? '#fff'
      : '#b3b3b3'

  return (
    <Link href={handleVariantTypes()?.url}>
      <MenuItemContainer
        $isActive={isActive}
        className={`variant-${variant}, menuItem`}
        $hasBackground={handleVariantTypes()?.hasBackground}
      >
        <CustomSVG width={22} htmlColor={colorSVG}>
          {isActive
            ? handleVariantTypes()?.icon
            : handleVariantTypes()?.activeIcon}
        </CustomSVG>
        <MenuItemTitle>{handleVariantTypes()?.label}</MenuItemTitle>
      </MenuItemContainer>
    </Link>
  )
}

export default MenuItem
