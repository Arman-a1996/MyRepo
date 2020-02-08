import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading:true,
    }
  }
  componentDidMount() {
    if(this.state.loading) {
      setTimeout(() => {
        this.setState({loading:false});
      },5000 );
    }
  }
  render() {
    if(this.state.loading) {
      return <div> ...Loading </div>;
    }
    return <div> Hallo </div>;
  }
}


export default App;
