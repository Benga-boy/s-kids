import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import {logo} from '../../styles/assets/homeCarousel/homeCarousel-data'
class Navbar extends React.Component {
  state = { isOpen: false }


  // * Function to toggle navbar and turn it into a cheeseburger
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  // * Function to close Navbar if use clicks different location when in Burger menu
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ isOpen: false })
    }
  }

  render() {
    const { isOpen } = this.state
    return (
      <div className="navbar">
        <div className="nav-top">
          <Link className="nav-logo" to="/">
            <img id="sk-logo" src={logo} alt="Sporting Kids" />
          </Link>
          <div className="contact">
            <div className="email">
              <p><a href="mailto:admin@sportingkids.co.uk" target="_blank" rel="noopener noreferrer"><strong><ion-icon name="mail-outline"></ion-icon></strong></a></p>
              <div className="email-detail">
                <p><a href="mailto:admin@sportingkids.co.uk" target="_blank" rel="noopener noreferrer"><strong>Email Us:</strong></a></p>
                <p><a href="mailto:admin@sportingkids.co.uk" target="_blank" rel="noopener noreferrer">admin@sportingkids.co.uk</a></p>
              </div>
            </div>
            <div className="phone-number">
              <p><a href="tel:07904618138" target="_blank" rel="noopener noreferrer"><strong><ion-icon name="call-outline"></ion-icon></strong></a></p>
              <div className="phone-number-detail">
                <p><a href="tel:07904618138" target="_blank" rel="noopener noreferrer"><strong>Call Us:</strong></a></p>
                <p><a href="tel:07904618138" target="_blank" rel="noopener noreferrer">07904618138</a></p>
              </div>
            </div>
          </div>
        </div>
        <hr className="nav-divider"></hr>
        <div className="nav-bottom">
          <div className="menu-port">
            <div className="links">
              <div className="navbar-brand">
                <Link to="/" className="navbar-item"><span>HOME</span></Link>
                <span onClick={this.handleToggle} className={`navbar-burger ${isOpen ? 'is-active' : ''}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
                <div className="navbar-item">
                  <Link to="/about" className="navbar-item"><span>ABOUT</span></Link>
                  <Link to="/multisports" className="navbar-item"><span>MULTI-SPORT SERVICES</span></Link>
                  <Link to="/schoolservices" className="navbar-item"><span>SCHOOL SERVICES</span></Link>
                  <Link to="/whatson" className="navbar-item"><span>WHATS ON!</span></Link>
                  <Link to="/contact" className="navbar-item"><span>CONTACT US</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Navbar)