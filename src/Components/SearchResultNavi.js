import React from 'react'
import AddListPageNewRecord from './AddListPageNewRecord'
import NewPagePicture from './NewPagePicture'
import SearchButtonListPage from './SearchButtonListPage'
import SearchResultBox from './SearchResultBox'

export default function SearchResultNavi() {
  return (
    <div>
        <NewPagePicture></NewPagePicture>
        <SearchResultBox></SearchResultBox>
        <SearchButtonListPage></SearchButtonListPage>
        <AddListPageNewRecord></AddListPageNewRecord>
    </div>
  )
}
