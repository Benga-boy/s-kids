import React from 'react'

class BoxFourCard extends React.Component {
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


        <article onClick={toggleModal} className="box-four message is-success" id="box4">
          <div className="one-to-one message-body">
            <p><strong>ONE TO ONE <br /> COACHING</strong></p>
          </div>
        </article>

        <div className={this.state.isActive}>
          <div onClick={toggleModal} className="modal-background"></div>
          <div className="animate__animated animate__backInUp">
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">ONE-TO-ONE SPORTS PERFORMANCE COACHING</p>
                <button className="delete" aria-label="close" onClick={toggleModal}></button>
              </header>
              <section className="modal-card-body">
                <p>
                  One to one sports coaching with Sporting Kids provide personalised sessions which aim to improve skills, confidence and overall performance in a chosen sport.
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

export default BoxFourCard