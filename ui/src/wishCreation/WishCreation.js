import React, { Component } from 'react'

class WishCreation extends Component {
  state = {
    unit: true,
    wishInput: ''
  }

  handleChange = event => {
    event.preventDefault()
    const [value, name] = [event.target.value, event.target.name]
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>Hello</h1>
          <div>Img 1</div>
          <div>Img 2</div>
        </div>
        <div>
          <div className="child-name-age">
            <div>
              My name is{' '}
              <input
                name="child-name"
                type="text"
                required
                placeholder="enter your name"
                value={this.state.name}
                onChange={this.handleChange}
              />{' '}
              and I am{' '}
              <input
                name="child-age"
                type="text"
                required
                placeholder="your age"
                value={this.state.age}
                onChange={this.handleChange}
              />{' '}
              years old!
            </div>
          </div>
          <div className="child-hometown">
            <div>
              My hometown is{' '}
              <input
                name="child-hometown"
                type="text"
                required
                placeholder="enter your hometown"
                value={this.state.hometown}
                onChange={this.handleChange}
              />
              {'!'}
            </div>
          </div>
          <div className="child-wish">
            <div className="go-somewhere">
              <button
                name="wish"
                value="GO"
                onClick={event => {
                  event.preventDefault()
                  this.handleChange(event)
                }}
                onTouchStart={event => {
                  event.preventDefault()
                  this.handleChange(event)
                }}
              >
                IMG 1
              </button>
              <div>GO Somewhere!</div>
            </div>
            <div className="meet-someone">
              <button
                name="wish"
                value="MEET"
                onClick={event => {
                  event.preventDefault()
                  this.handleChange(event)
                }}
                onTouchStart={event => {
                  event.preventDefault()
                  this.handleChange(event)
                }}
              >
                {' '}
                IMG 2
              </button>
              <div> MEET Someone!</div>
            </div>
            <div className="be-someone">
              <button
                name="wish"
                value="BE"
                onClick={event => {
                  event.preventDefault()
                  this.handleChange(event)
                }}
                onTouchStart={event => {
                  event.preventDefault()
                  this.handleChange(event)
                }}
              >
                IMG 3
              </button>
              <div>BE Someone!</div>
            </div>
            <div className="see-something">
              <button
                name="wish"
                value="SEE"
                onClick={event => {
                  event.preventDefault()
                  this.handleChange(event)
                }}
                onTouchStart={event => {
                  event.preventDefault()
                  this.handleChange(event)
                }}
              >
                IMG 4
              </button>
              <div>SEE Something!</div>
            </div>
            <div className="wish-input">
              <textarea
                name="wishInput"
                type="text"
                required
                placeholder="Tell us about your wish"
                value={this.state.wishInput}
                onChange={this.handleChange}
              />
            </div>
            <div className="wish-submit">
              <button>Submit Your Wish</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default WishCreation
