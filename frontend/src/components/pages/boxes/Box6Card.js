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
            <p><strong>MULTI-SPORTS CAMPS</strong></p> 
          </div>
        </article>


        <div className={this.state.isActive}>
          <div onClick={toggleModal} className="modal-background"></div>
          <div className="animate__animated animate__backInUp">
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">MULTI-SPORTS CAMPS</p>
                <button className="delete" aria-label="close" onClick={toggleModal}></button>
              </header>
              <section className="modal-card-body">
                <p>
              Normally delivered from 7:30am - 8:50am. Pupils begin the day with Physical Activity, helping to stimulate them ready for the school day ahead. We also offer board games, puzzles a place to read and write in our ‘relaxation areas’.
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