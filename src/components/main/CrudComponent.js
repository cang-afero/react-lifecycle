import React, { Component } from 'react';
import { Button, Form, Image, List } from 'semantic-ui-react';

export default class CrudComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    };
  }

  onChange_firstName = event => {
    let value = event.target.value;

    this.setState({ firstName: value });
  };

  onChange_lastName = event => {
    let value = event.target.value;

    this.setState({ lastName: value });
  };

  hangle_submitUserProfile = () => {
    let { firstName, lastName } = this.state;
    let { create_employee } = this.props;
    let generateRandomNum = Math.floor(Math.random() * (100000 - 6 + 1)) + 5;
    let userProfileObj = {
      id: generateRandomNum,
      first_name: firstName,
      last_name: lastName
    };

    create_employee(userProfileObj);
  };

  handle_deleteEmployee = event => {
    let { employeeid } = event.currentTarget.dataset;
    let { delete_employee } = this.props;

    delete_employee(employeeid);
  };

  render() {
    //let { employeesProfile } = this.props;
    let { firstName, lastName } = this.state;

    return (
      <div>
        {/* {employeesProfile.map((obj, i) => {
          return (
            <List key={i} divided verticalAlign='middle'>
              <List.Item>
                <List.Content floated='right'>
                  <Button>Update</Button>
                  <Button data-employeeid={obj.id} onClick={this.handle_deleteEmployee}>
                    Delete
                  </Button>
                </List.Content>
                <Image avatar src='/images/avatar/small/lena.png' />
                <List.Content>{obj.first_name + ' ' + obj.last_name}</List.Content>
              </List.Item>
            </List>
          );
        })} */}

        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' value={firstName} onChange={this.onChange_firstName} />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' value={lastName} onChange={this.onChange_lastName} />
          </Form.Field>

          <Button onClick={this.hangle_submitUserProfile}>Submit</Button>
        </Form>
      </div>
    );
  }
}

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
