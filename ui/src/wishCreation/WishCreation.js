import React, { Component } from 'react'

class WishCreation extends Component {
  state = {
    name: '',
    age: '',
    hometown: '',
    illness: '',
    wishType: '',
    wishDetails: ''
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
              My name is <input placeholder="enter your name" /> and I am{' '}
              <input placeholder="your age" /> years old!
            </div>
          </div>
          <div className="child-hometown-illness">
            <div>
              My hometown is <input placeholder="enter your hometown" /> and I
              have <input placeholder="your illness" />
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
