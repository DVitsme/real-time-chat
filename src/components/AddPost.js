import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

export default class AddPost extends Component {
  state = { title: '', content: '' };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onCreate } = this.props;
    const { title, content } = this.state;

    // hard coded for now update with firebase data later on
    const post = {
      title,
      content,
      user: {
        uid: '1111',
        displayName: 'Derrick Valentine',
        email: 'dvalentine2012@gmail.com',
        photoURL: 'https://react.semantic-ui.com/images/avatar/small/joe.jpg'
      },
      favorites: 0,
      comments: 0,
      createdAt: new Date()
    };

    onCreate(post);

    this.setState({ title: '', content: '' });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Title</label>
          <input
            placeholder="Title"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Post</label>
          <input
            placeholder="Your Post"
            type="text"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
