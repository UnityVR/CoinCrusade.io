import React from 'react'
import {connect} from 'react-redux'
import {FirstView, SecondView} from '../components'

/**
 * COMPONENT
 */
export const UserHome = props => {
  return (
    <div>
      <FirstView />
      <SecondView />
    </div>
  )
}

const mapState = state => {
  return {}
}

export default connect(mapState)(UserHome)
