import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Bob"
          avatarSource={faker.image.avatar()}
          timeAgo="Today at 4:45PM"
          commentText="Hello world"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Chris"
          avatarSource={faker.image.avatar()}
          timeAgo="Today at 2:00AM"
          commentText="Does this work?"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Joe"
          avatarSource={faker.image.avatar()}
          timeAgo="Yesterday at 5:00PM"
          commentText="I think it does"
        />
      </ApprovalCard>
    </div>
  );
};


ReactDOM.render(<App />, document.querySelector('#root'));
