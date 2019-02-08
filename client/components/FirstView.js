import React from 'react'
import {connect} from 'react-redux'

export const FirstView = props => {
  return (
    <div className="first_View">
      <div />
    </div>
  )
}

const mapState = state => {
  return {}
}

export default connect(mapState)(FirstView)
