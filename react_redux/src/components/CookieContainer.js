import React from 'react'
import { connect } from 'react-redux'
import { buyCookie } from '../redux/'


function CookieContainer(props) {
  return (
    <div>
        <h2>Number of Cookies - {props.numOfCookies}</h2>
        <button onClick={props.buyCookie}> Buy Cookie</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
      numOfCookies: state.cookie.numOfCookies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCookie: () => dispatch(buyCookie())
    }
}

export default connect(
        mapStateToProps, 
        mapDispatchToProps) 
        (CookieContainer)