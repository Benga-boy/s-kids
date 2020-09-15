import React from 'react'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'


class Login extends React.Component {
  state = {
    formData: {
      email: '',
      password: ''
    },
    error: ''
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData, error: '' })
  }
  handleSubmit = async event => {
    event.preventDefault()
    try {
      const res = await loginUser(this.state.formData)
      setToken(res.data.token)
      // toast(res.data.message)
      this.props.history.push('/')
    } catch (err) {
      this.setState({ error: 'Invalid Credentials' })
    }
  }

  render() {
    const { formData, error } = this.state
    return (
      <div className="login">
        <section className="section">
          <div className="container">
            <div className="columns">
              <form
              onSubmit={this.handleSubmit}
                className="column is-half is-offset-one-quarter box">
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                    onChange={this.handleChange}
                    value={formData.email}
                      className={`input ${error ? 'is-danger' : ''}`}
                      placeholder="Email"
                      name="email"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                    onChange={this.handleChange}
                    value={formData.password}
                      type="password"
                      className={`input ${error ? 'is-danger' : ''}`}
                      placeholder='Password'
                      name='password'
                    />
                  </div>
                  {error && <small className="help is-danger">{error}</small>}
                </div>
                <div className="field">
                  <button type="submit"
                    className="button is-fullwidth is-info">Login</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Login