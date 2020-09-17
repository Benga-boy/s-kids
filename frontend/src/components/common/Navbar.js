import React from 'react'
import { Link, withRouter } from 'react-router-dom'

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
          <Link to="/">
            <img id="sk-logo" src="https://static.wixstatic.com/media/1a0189_f6d00781a30642748a8c3de78937a259~mv2_d_2480_1265_s_2.png/v1/crop/x_0,y_244,w_2480,h_785/fill/w_600,h_190,al_c,q_85,usm_0.66_1.00_0.01/Sporting%20Kids%20logo%20PNG.webp" alt="Sporting Kids" />
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