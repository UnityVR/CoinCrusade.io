import React from 'react'
import {connect} from 'react-redux'

export const SecondView = props => {
  return (
    <div className="second_View">
      <div />
    </div>
  )
}

const mapState = state => {
  return {}
}

export default connect(mapState)(SecondView)
