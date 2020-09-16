import React from 'react'

const Contact = () => {
  return (
    <div className="contact-us">
      <section className="contact-background hero is-danger">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              WE WILL LOVE TO HEAR FROM YOU!
            </h1>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
            <h1 className="title">CONTACT US</h1>
              <div className="contact-form">
                <form method="POST" action="https://formspree.io/mknqkgww">
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                      <input className="input is-small" type="text" placeholder="Full Name" name="name" required />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input className="input is-small" type="text" placeholder="Email Address" name="email" required />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Subject</label>
                    <div className="control">
                      <input className="input is-small" type="text" placeholder="Subject" name="subject" required />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                      <textarea className="textarea is-medium" placeholder="Message" name="message" required />
                    </div>
                  </div>
                  <button className="button is-rounded is-medium is-success">SEND</button>
                </form>
              </div>
            </div>
            {/* <div className="divider"></div> */}
            <div className="column is-half">
              <div className="sub-form">
                <h1 className="title">JOIN OUR NEWLETTER</h1>
              <iframe title="Subscription form" src="https://cdn.forms-content.sg-form.com/3f77d55f-cc14-11ea-833a-7e3deb42604a"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact