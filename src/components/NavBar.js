import React from 'react'
import PropTypes from 'prop-types'


export default function NavBar(props) {
  return (
    <div>

          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">{props.about}</a>
                </li>
            
            </ul>
            <form className="d-flex" role="search">
              <div class={`form-check form-switch text-${props.mode==='light' ? 'dark': 'light'}`}>
                <input class="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                <label class="form-check-label " htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
              </div>
            </form>
            </div>
        </div>
        </nav>
    </div>
  )
}


// propTypes are defined to get props in proper data format like string , number etc
NavBar.propTypes ={
    title: PropTypes.string
}

// default prop value when no input value is given from app.js
NavBar.defaultProps ={
    title:"Set title here",
    about :"About"
}