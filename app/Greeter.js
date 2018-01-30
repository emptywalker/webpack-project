
import React, { Component } from 'react'
const config = require('./config.json');
class Greeter extends Component {
  render() {
    return (
      <div>
        { config.greetText }
      </div>
    )
  }
}
export default Greeter


// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = config.greetText;
//   return greet;
// };