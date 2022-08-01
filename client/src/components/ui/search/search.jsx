import React from 'react'
import Button from '../button/button'
import InputItem from '../input/inputItem'
import './search.css'
// title, type, classes
const Search = () => {
  return <form className='form-search' action="/">
    <InputItem name={'search'} type={'text'}/>
    <Button title={'Найти'} classes={'btn'} type={'button'}/>
  </form>
}

export default Search
