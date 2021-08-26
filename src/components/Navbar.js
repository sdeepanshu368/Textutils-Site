import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">{props.homeText}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>

                    {/* <div style={{marginRight:'10px', marginBottom:'10px', cursor:'pointer'}} className="d-flex">
                        <div onClick={()=>props.toggleMode('light')} className="bg-light rounded" style={{height:'20px', width:'20px', marginRight:'5px', border:'1px solid red', cursor:'pointer'}}></div>
                        <div onClick={()=>props.toggleMode('dark')} className="bg-dark rounded" style={{height:'20px', width:'20px', marginRight:'5px', border:'1px solid red', cursor:'pointer'}}></div>
                        <div onClick={()=>props.toggleMode('primary')} className="bg-primary rounded" style={{height:'20px', width:'20px', marginRight:'5px', border:'1px solid red', cursor:'pointer'}}></div>
                        <div onClick={()=>props.toggleMode('danger')} className="bg-danger rounded" style={{height:'20px', width:'20px', marginRight:'5px', border:'1px solid red', cursor:'pointer'}}></div>
                        <div onClick={()=>props.toggleMode('success')} className="bg-success rounded" style={{height:'20px', width:'20px', marginRight:'5px', border:'1px solid red', cursor:'pointer'}}></div>
                        <div onClick={()=>props.toggleMode('warning')} className="bg-warning rounded" style={{height:'20px', width:'20px', marginRight:'5px', border:'1px solid red', cursor:'pointer'}}></div>
                    </div> */}

                    <div style={{marginRight:'10px', marginBottom:'10px', cursor:'pointer'}} className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input style={{cursor:'pointer'}} onClick={props.toggleMode} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label style={{cursor:'pointer'}} className="form-check-label" htmlFor="flexSwitchCheckDefault">Light/Dark Mode</label>
                    </div>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'white'}} required />
                        <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'}`} type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {title: PropTypes.string.isRequired,
                    homeText: PropTypes.string.isRequired,
                    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {title: 'Set title here',
                    homeText: 'Home text here',
                    aboutText: 'About text here'
}