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

import { render } from 'react-dom';
import React from 'react';
import Component, { autoBind } from './lib';

class App extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  onClick(event) {
    console.log(this);
  }

  render() {
    var props = this.props;

    return (
      <div {...props} onClick={this.onClick}>
        Hello, please click me
      </div>
    );
  }
}

render(
  <App className="xxx" style={{ color: 'blue' }} />,
  document.getElementById('content')
);
