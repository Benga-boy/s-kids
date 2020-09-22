import React from 'react'

class BoxTwoCard extends React.Component {
  state = {
    isActive: 'modal'
  }
  render() {

    const toggleModal = () => {
      if (this.state.isActive === 'modal is-active') {
        this.setState({ isActive: 'modal' })
      } else {
        this.setState({ isActive: 'modal is-active' })
      }
    }

    return (
      <>


        <article onClick={toggleModal} className="message is-link" id="box2">
          <div className="sports-coaching message-body">
            <p><strong>SCHOOL SERVICES</strong></p>
          </div>
        </article>


        <div className={this.state.isActive}>
          <div onClick={toggleModal} className="modal-background"></div>
          <div className="animate__animated animate__backInDown">
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">SCHOOL SERVICES</p>
                <button className="delete" aria-label="close" onClick={toggleModal}></button>
              </header>
              <section className="modal-card-body">
                <p>
                We provide schools with a range of sports throughout the day. Our tailor made packages are suited to meet your schools budget and needs. We have experience of coaching in primary and secondary mainstream and SEN schools, as well as pupil referral units.
                </p>
              </section>
              <footer className="modal-card-foot">
              
              </footer>
            </div>
          </div>
        </div>



      </>
    )
  }
}

export default BoxTwoCard