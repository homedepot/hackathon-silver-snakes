import React, { Component } from 'react'

class WishCreation extends Component {
  state = {}

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
          <div className="child-hometown-illness">
            <div>
              My hometown is{' '}
              <input
                name="child-hometown"
                type="text"
                required
                placeholder="enter your hometown"
                value={this.state.hometown}
                onChange={this.handleChange}
              />{' '}
              and I have{' '}
              <input
                name="child-illness"
                type="text"
                required
                placeholder="your illness"
                value={this.state.illness}
                onChange={this.handleChange}
              />
            </div>
            <div className="child-wish">
              <div className="go-somewhere">
                <button>IMG 1</button>
                <div>GO Somewhere!</div>
              </div>

              <div className="meet-someone">
                <button> IMG 2</button>
                <div> MEET Someone!</div>
              </div>
              <div className="be-someone">
                <button>IMG 3</button>
                <div>BE Someone!</div>
              </div>
              <div className="see-something">
                <button>IMG 4</button>
                <div>SEE Something!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default WishCreation
