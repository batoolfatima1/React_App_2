import React from 'react'
import PropTypes from 'prop-types'
import TodoList from '../TodoList'

export default function Header(props) {
  return (
    <>
    <div>{props.show? <h1>Header</h1> : "dont"}</div>
    </>
  )
}
Header.propTypes = {
    show: PropTypes.bool
}

Header.defaultProps ={
    show:true
}
//<TodoList show = {props.show}/>