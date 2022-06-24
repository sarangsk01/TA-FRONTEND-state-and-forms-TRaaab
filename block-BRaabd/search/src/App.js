import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.state.image,
    };
  }
  handleDisplay = () => {
    this.setState({ image: this.state.image });
  };
  render() {
    return <h2>{this.state.image}</h2>;
    <button onClick={this.handleDisplay}>Display Image</button>;
  }
}
export default App;
