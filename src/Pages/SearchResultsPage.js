import React from 'react'
import OrderBy from '../Components/OrderBy'
import OrderBySelection from '../Components/OrderBySelection'
import SearchResultNavi from '../Components/SearchResultNavi'
import SearchResultList from '../Components/SearchResultList'
import Pagination from '../Components/Pagination'

export default function SearchResultsPage() {
  return (
    <div>
        <SearchResultNavi></SearchResultNavi>
        <OrderBy></OrderBy>
        <OrderBySelection></OrderBySelection>
        <SearchResultList></SearchResultList>
        <Pagination></Pagination>
    </div>
  )
}
