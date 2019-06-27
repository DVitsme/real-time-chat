import React from 'react';
import AddPost from './AddPost';
import Post from './Post';

export default function Posts({ posts, onCreate }) {
  return (
    <section>
      <AddPost onCreate={onCreate} />
      {posts.map(post => (
        <Post {...post} key={post.id} />
      ))}
    </section>
  );
}
