import React from 'react'

import { rene, ola } from '../../styles/assets/homeCarousel/homeCarousel-data'


class About extends React.Component {
  state = {
    reneModalOpen: false,
    olaModalOpen: false
  }

  toggleReneModal = () => {
    this.setState({ reneModalOpen: !this.state.reneModalOpen })
  }

  closeReneModal = () => {
    this.setState({ reneModalOpen: !this.state.reneModalOpen })
  }

  toggleOlaModal = () => {
    this.setState({ olaModalOpen: !this.state.olaModalOpen })
  }

  render() {
    return (
      <div className="about">
        <section className="about-background  hero is-link has-text-centered">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                ABOUT US
              </h1>
              <h4>Empowering young people through sports!</h4>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns">
              {/* <div className="column">
                <img src="https://static.wixstatic.com/media/1a0189_8f00a4cd2e9e4684a39c90b603af02db~mv2.jpg/v1/fill/w_680,h_680,al_c,q_85,usm_0.66_1.00_0.01/ABOUT%20US.webp" alt="Rene and Ola Sporting Kids" />
              </div>
              <div className="divider"></div> */}
              <div className="column is-four-fifth">
                <div className="content about-content">
                  <p>
                    <strong>
                      <em>
                      Sporting Kids was founded in 2018. Our mission is to empower our future leaders through sports by giving them a platform to have fun and engage in sports.
                      </em>
                    </strong>
                    </p>
                  <p>
                    <strong>
                      <em>
                      We pride ourselves on striving to meet the interests and needs of the children and young people we
                      work with, through various sports such as football, basketball, tennis, cricket, gymnastics and more.
                      </em>
                    </strong>
                  </p>
                  <p>
                    <strong>
                      <em>
                      Our sessions are tailored to fully engage every participant. We build on existing skills as well as coach new skills, such as communication, making new friends, being a team player and a leader. All whilst having fun and promoting the benefits of sports.
                      </em>
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div>
            <h1 className="title coaches">COACHES</h1>
          </div>
          <div className="container">
            <div className="columns">
              <div className="column about-rene">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-3by2">
                      <img src={rene} alt="Rene Steer" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">Rene Steer</p>
                        <a href="https://twitter.com/ReneSteer?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer" className="subtitle is-6"><ion-icon name="logo-twitter"></ion-icon>  @renesteer</a>
                      </div>
                    </div>
                    <div className="content">
                      <p>
                        Rene Steer founded Sporting Kids in 2018, his sporting story started at Arsenal <span className="more" onClick={this.toggleReneModal}>more...</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column about-ola">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-3by2">
                      <img src={ola} alt="Ola Williams" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">Ola Williams</p>
                        <a href="https://twitter.com/sportingkidsltd" className="subtitle is-6"><ion-icon name="logo-twitter"></ion-icon>  @olawilliams</a>
                      </div>
                    </div>
                    <div className="content">
                      <p>
                      Ola Williams co-founded Sporting Kids alongside his partner Rene Steer <span className="more" onClick={this.toggleOlaModal}>more...</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={this.state.reneModalOpen ? "modal is-active" : "modal"}>
          <div onClick={this.toggleReneModal} className="modal-background"></div>
          <div className="animate__animated animate__backInLeft">
            <div className="modal-card rene-modal">
              <header className="modal-card-head">
                <p className="modal-card-title">Rene Steer</p>
                <button onClick={this.toggleReneModal} className="delete" aria-label="close"></button>
              </header>
              <section className="modal-card-body">
                <figure className="image is-128x128">
                  <img src={rene} alt="Rene Steer" />
                </figure>
                <div className="content">
                  <p>
                  Rene Steer founded Sporting Kids in 2018, his sporting journey began as a youngster when Rene played at the Arsenal Academy under Arsene Wenger. Rene continues to play football at a semi-professional level.
                  </p>
                  <p>
                  As well as football, Rene found a passion for coaching and over the years has worked and developed his coaching skills with children and young people in various settings.
                  </p>
                  <p>
                  My vision for the company is being able to "provide a chance for children to experience new sports, learn new skills, be active and most importantly, have fun!"
                  </p>
                  <h4>Qualifications:</h4>
                  <ul>
                    <li>Level 1 award in developing community activities for youth at risk</li>
                    <li>Level 1 award  in equality, diversity and inclusion</li>
                    <li>Intermediate primary level - gymnastics</li>
                    <li>Uefa B football  licence coach</li>
                    <li>PTR Tennis qualified</li>
                    <li>First aid</li>
                    <li>Safeguarding</li>
                  </ul>
                </div>
              </section>
              <footer className="modal-card-foot">
                <ul>
                    <li>
                      <a className="rene-twitter" href="https://twitter.com/ReneSteer?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer">
                      <ion-icon name="logo-twitter"></ion-icon>
                      </a>
                    </li>
                    <li>
                      <a className="rene-instagram" href="https://www.instagram.com/renesteer/" target="_blank" rel="noopener noreferrer">
                      <ion-icon name="logo-instagram"></ion-icon>
                      </a>
                    </li>
                  </ul>
              </footer>
            </div>
          </div>
        </div>
        <div className={this.state.olaModalOpen ? "modal is-active" : "modal"}>
          <div onClick={this.toggleOlaModal} className="modal-background"></div>
          <div className="animate__animated animate__backInRight">
            <div className="modal-card ola-modal">
              <header className="modal-card-head">
                <p className="modal-card-title">Ola Williams</p>
                <button onClick={this.toggleOlaModal} className="delete" aria-label="close"></button>
              </header>
              <section className="modal-card-body">
                <figure className="image is-128x128">
                  <img src={ola} alt="Ola Williams" />
                </figure>
                <div className="content">
                  <p>
                    Ola Williams is a co founder of sporting kids. 
                    <br/><br/>
                    Ola is also a semi professional football player. He started playing at this level from the age of 16 where he made his first team debut for Borehamwood FC. He has since played for Harrow borough, Billericay fc, Hampton and Richmond, Wingate and Finchley and is currently playing for cheshunt fc. 
                  </p>
                  <p>
                    Ola’s coaching career started working part time at Borehamwood which he helped out coaching kids at the half term football camps, He has also worked along side woman’s football legend and ex Arsenal player Rachel Yankey coaching in primary school kids around the north west London area. He has also worked with London rangers FC as the Head of recruitment for their football college scholarship scheme for 16-18 years old. 
                    <br/><br/>
                    Ola has received good sporting qualifications  such as football level 1 coaching badge, certificate and diploma in sports, general sports and training and fitness in sports.
                  </p>
                  <p>
                    <a href="https://www.hamhigh.co.uk/sport/football/former-wingate-defender-williams-is-empowering-young-people-with-sports-1-6818140" target="_blank" rel="noopener noreferrer">Check out</a> a recent article on how Ola and sporting kids help empower young people in the community
                  </p>
                </div>
              </section>
              <footer className="modal-card-foot">
                <ul>
                  <li>
                    <a className="ola-twitter" href="https://twitter.com/sportingkidsltd" target="_blank" rel="noopener noreferrer">
                    <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </li>
                  <li>
                    <a className="ola-instagram" href="https://www.instagram.com/sporting_kids/" target="_blank" rel="noopener noreferrer">
                    <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                  </li>
                </ul>
              </footer>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default About