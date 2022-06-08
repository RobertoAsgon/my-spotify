import React from 'react'
import { Pause, PlaySvg } from '../../assets'
import { CustomSVG } from '../CustomSVG'
import { PlayContainer } from './styles'

interface PlayProps {
  isActive: boolean
}

const Play: React.FC<PlayProps> = ({ isActive }) => {
  return (
    <PlayContainer>
      <CustomSVG width={16} height={16} htmlColor="white">
        {isActive ? <PlaySvg /> : <Pause />}
      </CustomSVG>
    </PlayContainer>
  )
}

export default Play
