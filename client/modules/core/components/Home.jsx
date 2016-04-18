import React from 'react';

const Home = ({things, users}) => (
  <div id="main-page">
    Hello World
    <div>
      Things
      {things.map(thing => <div>{thing._id}</div>)}
    </div>
    <div>
      Users
      {users.map(user => <div>{user._id}</div>)}
    </div>
  </div>
);

export default Home;
