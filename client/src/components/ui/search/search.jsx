import React from 'react'
import Button from '../button/button'
import InputText from '../input/inputText'
import './search.css'
// title, type, classes
const Search = () => {
  return <form className='form-search' action="/">
    <InputText name={'search'}/>
    <Button title={'Найти'} classes={'btn'} type={'button'}/>
  </form>
}

export default Search
