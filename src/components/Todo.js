import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({onClick, completed, text}) => (
    <li
      onClick={onClick}
      style={{
          textDecoration: completed ? 'underline' : 'none'
      }}
    >
    {text}
    </li>
)

export default Todo