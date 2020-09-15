import React from 'react'

class BoxOneCard extends React.Component {
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



        <article onClick={toggleModal} className="box-one message is-warning" id="box1">
          <div className="after-school message-body">
            <p><strong>AFTER SCHOOL</strong></p>
          </div>
        </article>


        <div className={this.state.isActive}>
          <div onClick={toggleModal} className="modal-background"></div>
          <div className="animate__animated animate__backInDown">
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">AFTER SCHOOL</p>
                <button className="delete" onClick={toggleModal} aria-label="close"></button>
              </header>
              <section className="modal-card-body">
                <p>
                  After school club - normally runs for an hour 3.30pm until 4.30pm. These clubs give pupils the chance to further develop their skills in an activity outside school hours. All pupils participating in After School Clubs receive a medal, and trophies are given out in the final week’s presentation.
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

export default BoxOneCard