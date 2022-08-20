import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactPaginate from 'react-paginate'
import UserItem from '../userItem'
import { useSelector } from 'react-redux'
import { getCurrentUserId } from '../../store/users'

const PaginatedItems = ({ itemsPerPage, items }) => {
  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const authUserId = useSelector(getCurrentUserId())

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(items.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(items.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, items])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    setItemOffset(newOffset)
  }

  return (
    <>
      <ul className='user-list'>
        {currentItems.map((user) => (
          user._id !== authUserId && <UserItem key={user._id} user={user} />
        ))}
      </ul>
      {pageCount > 1 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="pagination__num"
          previousLinkClassName="pagination__num"
          nextLinkClassName="pagination__num"
          activeLinkClassName="active"
          disabledClassName='disabled'
        />
      )}
    </>
  )
}
PaginatedItems.propTypes = {
  itemsPerPage: PropTypes.number,
  items: PropTypes.array
}

export default PaginatedItems
