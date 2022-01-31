import React from 'react';
import Form from '../../components/form/Form';
import List from '../../components/list/List';
import './style.css';

const Home = () => {
  return (
    <div className="row">
      <div className="column">
        <Form/>
      </div>
      <div className="column">
        <List/>
      </div>
    </div>
  );
};

export default Home;
