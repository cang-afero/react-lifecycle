import React, { Component } from 'react';
import SecondComponent from './SecondComponent';

export default class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { foundIt: false };
  }

  //this is how you setup default props
  static defaultProps = {
    catName: 'Sandy',
    eyeColor: 'deepblue',
    age: '120'
  };

  handle_changeColor = () => {
    let { foundIt } = this.state;
    this.setState({ foundIt: !foundIt });
  };

  render() {
    let { counter, defaultState, usersState, increase_counter } = this.props;
    let { foundIt } = this.state;

    console.log('props: ', this.props);
    return (
      <div>
        <p>I am MainComp. age: {defaultState || this.props.age}</p>
        <p>API user was called: {usersState.first_name}</p>
        <p>counter: {counter}</p>
        <button onClick={this.handle_changeColor}>Click Me</button>
        <button onClick={increase_counter}>increase counter</button>

        <SecondComponent foundIt={foundIt} />
      </div>
    );
  }
}
