import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Bob"
        avatarSource={faker.image.avatar()}
        timeAgo="Today at 4:45PM"
        commentText="Hello world"
      />
      <CommentDetail
        author="Chris"
        avatarSource={faker.image.avatar()}
        timeAgo="Today at 2:00AM"
        commentText="Does this work?"
      />
      <CommentDetail
        author="Joe"
        avatarSource={faker.image.avatar()}
        timeAgo="Yesterday at 5:00PM"
        commentText="I think it does"
      />
    </div>
  );
};


ReactDOM.render(<App />, document.querySelector('#root'));
