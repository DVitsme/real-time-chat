import React, { Component } from 'react';

import { Container, Header } from 'semantic-ui-react';

import Posts from './Posts';
import { getAllPost } from '../utilities';

// Import DB
import { firestore } from '../firebase';

class Application extends Component {
  state = {
    posts: [
      {
        id: '1',
        title: 'A Very Hot Take',
        content:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit repellendus modi unde cumque, fugit in ad necessitatibus eos sed quasi et! Commodi repudiandae tempora ipsum fugiat. Quam, officia excepturi!',
        user: {
          uid: '123',
          displayName: 'Bill Murray',
          email: 'billmurray@mailinator.com',
          photoURL: 'https://www.fillmurray.com/300/300'
        },
        stars: 1,
        comments: 47
      },
      {
        id: '2',
        title: 'The Sauciest of Opinions',
        content:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit repellendus modi unde cumque, fugit in ad necessitatibus eos sed quasi et! Commodi repudiandae tempora ipsum fugiat. Quam, officia excepturi!',
        user: {
          uid: '456',
          displayName: 'Mill Burray',
          email: 'notbillmurray@mailinator.com',
          photoURL: 'https://www.fillmurray.com/400/400'
        },
        stars: 3,
        comments: 0
      }
    ]
  };

  componentDidMount = async () => {
    const snapshot = await firestore.collection('posts').get();

    // get all the post in database
    const posts = snapshot.docs.map(getAllPost);

    // asign those post to the state
    this.setState({ posts });
  };

  handleCreate = async post => {
    const { posts } = this.state;

    const docRef = await firestore.collection('posts').add(post);
    const doc = await docRef.get();

    const newPost = getAllPost(doc);

    this.setState({ posts: [newPost, ...posts] });
  };

  render() {
    const { posts } = this.state;

    return (
      <Container>
        <Header as="h1">ChatNaws</Header>
        <Posts posts={posts} onCreate={this.handleCreate} />
      </Container>
    );
  }
}

export default Application;
