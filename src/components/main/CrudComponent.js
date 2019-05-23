import React, { Component } from 'react';
import { Button, Form, Image, List } from 'semantic-ui-react';

export default class CrudComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' />
          </Form.Field>

          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

// {employeesProfile.map((obj, i) => {
//   return (
//     <List key={i} divided verticalAlign='middle'>
//       <List.Item>
//         <List.Content floated='right'>
//           <Button>Update</Button>
//           <Button data-employeeid={obj.id} onClick={this.handle_deleteEmployee}>
//             Delete
//           </Button>
//         </List.Content>
//         <Image avatar src='/images/avatar/small/lena.png' />
//         <List.Content>{obj.first_name + ' ' + obj.last_name}</List.Content>
//       </List.Item>
//     </List>
//   );
// })}

// <List divided verticalAlign='middle'>
//   <List.Item>
//     <List.Content floated='right'>
//       <Button>Update</Button>
//       <Button>Delete</Button>
//     </List.Content>
//     <Image avatar src='/images/avatar/small/lena.png' />
//     <List.Content>Lena</List.Content>
//   </List.Item>
//   <List.Item>
//     <List.Content floated='right'>
//       <Button>Update</Button>
//       <Button>Delete</Button>
//     </List.Content>
//     <Image avatar src='/images/avatar/small/lindsay.png' />
//     <List.Content>Lindsay</List.Content>
//   </List.Item>
//   <List.Item>
//     <List.Content floated='right'>
//       <Button>Update</Button>
//       <Button>Delete</Button>
//     </List.Content>
//     <Image avatar src='/images/avatar/small/mark.png' />
//     <List.Content>Mark</List.Content>
//   </List.Item>
//   <List.Item>
//     <List.Content floated='right'>
//       <Button>Update</Button>
//       <Button>Delete</Button>
//     </List.Content>
//     <Image avatar src='/images/avatar/small/molly.png' />
//     <List.Content>Molly</List.Content>
//   </List.Item>
// </List>
