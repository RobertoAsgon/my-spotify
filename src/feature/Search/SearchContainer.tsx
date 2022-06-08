import React from 'react'
import { MainUserView, TopUserBar } from '../Root/styles'

const SearchContainer: React.FC = () => {
  return (
    <>
      <TopUserBar>Search User Top Bar</TopUserBar>
      <MainUserView>
        <h1>Search main content view</h1>
      </MainUserView>
    </>
  )
}

export default SearchContainer
