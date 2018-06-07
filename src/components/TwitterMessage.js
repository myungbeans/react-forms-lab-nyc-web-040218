import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweetBody: ""
    };
  }

  handleInput = (event) => {
    const tweetBody = event.target.value
    this.setState({
      tweetBody
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.tweetBody} onChange={this.handleInput}/>
        <p>{this.props.maxChars - this.state.tweetBody.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
