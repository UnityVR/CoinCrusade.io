import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {UserHome} from './components'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {}

  render() {
    return (
      <Switch>
        <Route path="/" component={UserHome} />
      </Switch>
    )
  }
}

const mapState = state => {
  return {}
}

const mapDispatch = dispatch => {
  return {}
}

export default withRouter(connect(mapState, mapDispatch)(Routes))
