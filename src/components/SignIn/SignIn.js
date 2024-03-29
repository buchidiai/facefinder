import React from 'react'


export default class Signin extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  handleOnEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }

  handleOnPasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }

  handleOnSubmitSignIn = () => {
    const { email, password } = this.state
    const { loadUser, onRouteChange } = this.props




    fetch('https://radiant-shelf-74628.herokuapp.com/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(response => response.json())
      .then(user => {
        console.log(user, 'user')
        if (user.id) {
          loadUser(user)
          onRouteChange('home');
          this.setState({
            error: ''
          })
        } else {
          this.setState({
            error: 'Email/Password is incorrect'
          })
        }
      })
  }


  render () {
    const { onRouteChange } = this.props;
    const { error } = this.state

    return (
      <article className="br3 ba b--black-10 mv4 w-200 w-100-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">

              <legend className="f1 fw6 ph0 mh0">Sign In</legend>

              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={ this.handleOnEmailChange }
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={ this.handleOnPasswordChange }

                />
              </div>
            </fieldset>
            <div className="mv3">
              <p style={ { color: 'red', fontSize: '9px' } }>{ error }</p>
            </div>


            <div className="">
              <input
                onClick={ this.handleOnSubmitSignIn }
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"


              />
            </div>
            <div className="lh-copy mt3">
              <p onClick={ () => onRouteChange('register') } className="f6 link dim black db pointer">Register</p>
            </div>
          </div>
        </main>
      </article>
    )

  }

}
