import React from 'react';

import Gist from 'react-gist';
import WirecaseReactInput from 'wirecase-react-input';

const testData = {
  name: 'Narendra',
  age: 32,
  place: {
    name: 'Delhi',
    pin: '110017',
  },
  likes: ['Apple', 'Banana', 'Mango'],
  test: {
    userData: undefined,
    loginData: null,
  },
  todos: [
    {
      task: 'Write  Book',
      done: false,
    },
    {
      task: 'Learn  React',
      done: true,
    },
    {
      task: 'Buy  Mobile',
      done: false,
    },
  ],
  dateWiseData: {
    '2016-02-14': {
      availableRooms: 10,
      soldRooms: 20,
    },
    '2016-02-15': {
      availableRooms: 15,
      soldRooms: 15,
    },
    '2016-02-16': {
      availableRooms: 5,
      soldRooms: 25,
    },
    '2016-02-17': {
      availableRooms: 0,
      soldRooms: 30,
    },
  },
};
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Wirecase React Input Demo</h1>
        <WirecaseReactInput json={testData} />
        <p>
          Following Test JSON Data is rendered above into a Tabular Format using
          wirecase-react-input
        </p>
        <Gist id="f699b5555245f69a1ce53b05545e6e70" />
      </div>
    );
  }
}
