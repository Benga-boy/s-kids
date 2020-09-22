import React from 'react'

class BoxThreeCard extends React.Component {
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


        <article onClick={toggleModal} className="box-three message is-dark" id="box3">
          <div className="small-groups message-body">
            <p><strong>EVENTS</strong></p>
          </div>
        </article>


        <div className={this.state.isActive}>
          <div onClick={toggleModal} className="modal-background"></div>
          <div className="animate__animated animate__backInDown">
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">EVENTS</p>
                <button className="delete" aria-label="close" onClick={toggleModal}></button>
              </header>
              <section className="modal-card-body">
                <p>
              Perfect for a group of siblings or friends! These fun sessions aim to improve skills, confidence and overall performance in a chosen sport or multi sports.
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

export default BoxThreeCard