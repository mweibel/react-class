/**
 * Copyright 2015-present Zippy Technologies
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import test from 'ava';
import React from 'react';
import setup from './setup';
import Component from '../index';
import { mount } from 'enzyme';

const emptyFn = () => {
};

class HelloWorldUnbound extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: 'world' };
  }
  render() {
    return <div>Hello {this.state.message}</div>;
  }
  setMessage(message, callback) {
    this.setState({ message: message }, callback);
  }
}

class HelloWorldBound extends Component {
  constructor(props) {
    super(props);
    this.state = { message: 'world' };
  }
  render() {
    return <div>Hello {this.state.message}</div>;
  }
  componentWillMount() {
    return this;
  }
  setMessage(message, callback) {
    this.setState(
      { message: message },
      typeof callback == 'function' ? callback : emptyFn
    );
  }
  returnThis() {
    return this;
  }
}

test.cb('test unbound throws', t => {
  const wrapper = mount(<HelloWorldUnbound />);
  const unbound = wrapper.get(0);
  const setMessage = unbound.setMessage;

  try {
    t.is(wrapper.text(), 'Hello world', 'Initial text is correct');
    unbound.setMessage('x', () => {
      t.is(wrapper.text(), 'Hello x', 'Updated text is correct');
      setMessage('a');
      // this is expected to throw
      t.fail();
      t.end();
    });
  } catch (ex) {
    t.pass();
    t.end();
  }
});

test.cb('test bound passes', t => {
  const wrapper = mount(<HelloWorldBound />);
  const bound = wrapper.get(0);
  const setMessage = bound.setMessage;

  try {
    t.is(wrapper.text(), 'Hello world', 'The original message is correct');

    setMessage('bound', () => {
      t.is(wrapper.text(), 'Hello bound', 'The message was changed');
      t.end();
    });
  } catch (ex) {
    t.fail();
    t.end();
  }
});

test('Test componentWillMount is not bound!', t => {
  const wrapper = mount(<HelloWorldBound />);
  const bound = wrapper.get(0);
  const componentWillMount = bound.componentWillMount;
  const returnThis = bound.returnThis;

  t.false(componentWillMount() === bound, 'componentWillMount is not bound');
  t.true(returnThis() === bound, 'returnThis is properly bound');
});
