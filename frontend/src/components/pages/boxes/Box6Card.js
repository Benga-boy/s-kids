import React from 'react'

class BoxSixCard extends React.Component {
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



        <article onClick={toggleModal} className="box-six message is-primary" id="box6">
          <div className="breakfast-club message-body">
            <p><strong>HALF-TERM CAMPS</strong></p> 
          </div>
        </article>


        <div className={this.state.isActive}>
          <div onClick={toggleModal} className="modal-background"></div>
          <div className="animate__animated animate__backInUp">
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">HALF-TERM CAMPS</p>
                <button className="delete" aria-label="close" onClick={toggleModal}></button>
              </header>
              <section className="modal-card-body">
                <p>
                We usually run from 9am-3pm during the school holidays with an optional early drop off and late pick up an hour either side.
                <br/>
                We offer a variety of activities and sports throughout the day with medals and certificates given out at the end of the week.
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

export default BoxSixCard