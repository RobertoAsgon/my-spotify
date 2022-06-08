import React from 'react'
import { MainUserView, TopUserBar } from '../Root/styles'

const BeginningContainer: React.FC = () => {
  return (
    <>
      <TopUserBar>Inicio content top bar</TopUserBar>
      <MainUserView>
        <h1>Inicio main content view</h1>
      </MainUserView>
    </>
  )
}

export default BeginningContainer
