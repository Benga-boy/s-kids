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
            <p><strong>SPORTS COACHING</strong></p>
          </div>
        </article>


        <div className={this.state.isActive}>
          <div onClick={toggleModal} className="modal-background"></div>
          <div className="animate__animated animate__backInDown">
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">SPORTS COACHING</p>
                <button className="delete" aria-label="close" onClick={toggleModal}></button>
              </header>
              <section className="modal-card-body">
                <p>
              We provide multisport sessions for children aged 4-11, our aim is for young people to be given high quality opportunities to access sport in a safe, fun and challenging environment.
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