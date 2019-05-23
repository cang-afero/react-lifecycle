import React from 'react';

export default function SecondComponent({ foundIt }) {
  console.log('SecondComponent', foundIt);

  return (
    <div>
      <p>I am second Component: {foundIt.toString()}</p>
    </div>
  );
}

// import React, { Component } from 'react';

// export default class SecondComponent extends Component {
//   render() {
//     let { foundIt } = this.props;
//     console.log('SecondComponent', this.props.foundIt);

//     return (
//       <div>
//         <p>I am second Component: {foundIt.toString()}</p>
//       </div>
//     );
//   }
// }
