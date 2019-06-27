import React from 'react';
import { Comment, Icon } from 'semantic-ui-react';

import moment from 'moment';

export default function Post({
  title,
  content,
  user,
  createdAt,
  stars,
  comments
}) {
  return (
    <Comment.Group>
      <Comment>
        <Comment.Avatar
          as="a"
          src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
        />
        <Comment.Content>
          {/* Lazy with the styling here this is for the title */}
          <Comment.Author>{title}</Comment.Author>
          <Comment.Text>{content}</Comment.Text>
          <Comment.Actions>
            <Comment.Action>{user.displayName}</Comment.Action>
            <Comment.Action>{moment(createdAt).calendar()}</Comment.Action>
            <Comment.Action>{stars}</Comment.Action>
            <Comment.Action>
              <Icon name="angle down" />
              Replies
            </Comment.Action>
            <Comment.Action>Delete</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    </Comment.Group>
  );
}
