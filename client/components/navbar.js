import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div className="nav">
    <div className="nav_Detail">
      <h1>Coin Crusade</h1>
    </div>
    <div className="nav_Style" />
  </div>
)

const mapState = state => {
  return {}
}

const mapDispatch = dispatch => {
  return {}
}

export default connect(mapState, mapDispatch)(Navbar)
