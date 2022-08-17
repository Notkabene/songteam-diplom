import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactPaginate from 'react-paginate'
import SongItem from '../songItem'

const PaginatedItems = ({ itemsPerPage, items }) => {
  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

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
      <ul>
        {currentItems.map((song) => (
          <SongItem key={song._id} song={song} />
        ))}
      </ul>
      {pageCount > 1 && <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName='pagination'
        pageLinkClassName='pagination__num'
        previousLinkClassName='pagination__num'
        nextLinkClassName='pagination__num'
        activeLinkClassName='active'
        disabledClassName='disabled'
      />}
    </>
  )
}
PaginatedItems.propTypes = {
  itemsPerPage: PropTypes.number,
  items: PropTypes.array
}

export default PaginatedItems
