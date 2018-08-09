import React from 'react'
import {connect} from 'react-redux'

function Header(props) {
  return (
    <div style={styles.header}>
      <div id="logo" style={styles.logo}>
        <h1>WSL1 ROCKS!</h1>
      </div>
      <div id="navbar" style={styles.navbar}>
        <a href="">posts</a>
        {props.user ? <a href="">logout</a> : <a href="">login</a>}

      </div>
    </div>
  )
}

let mapStateToProps = state => {
  return {
    user: state.user.data
  }
}

export default connect(mapStateToProps)(Header)

let styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center'
  },
  logo: {
    flex: 4,
    display: 'flex',
    justifyContent: 'flex-start'
  },
  navbar: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between'
  }
}