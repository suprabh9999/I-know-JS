import React, { Component } from 'react';
import isReachable from 'is-reachable';

class App extends Component {
  static socialReachable={facebook:null, twitter:null};
  constructor(){
    console.log('---------------------------------------------------- constructor----------------------------');
    super();
    this.state={
      facebook:null,
      twitter:null,
    };
  }
  componentDidMount(){
    isReachable('www.facebook..........com').then(reachable => {
      console.log('----------------------------------------------------facebook----------------------------');
      App.socialReachable.facebook=reachable;
      if(App.socialReachable.twitter!==null){
        console.log('Set state once.....');
        let prevState = {...this.state};
        prevState.facebook=reachable;
        prevState.twitter = App.socialReachable.twitter;
        this.setState(prevState);
      } 
    });

    isReachable('www.twitter.com').then(reachable => {
      console.log('---------------------------------------------------- Twitter----------------------------');
      App.socialReachable.twitter=reachable;
      if(App.socialReachable.facebook!==null){
        console.log('Set state once.....');
        let prevState = {...this.state};
        prevState.twitter=reachable;
        prevState.facebook = App.socialReachable.facebook;
        this.setState(prevState);
      }
    });
  }

  render() {
    console.log('---------------------------------------------------- render----------------------------');
    let component = this.state.facebook!==null && this.state.twitter!==null ? <h1>Suprabh</h1> : null
    return (
     <div>
        {component}
     </div>
    );
  }
}

export default App;
