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
import autoBind from '../../autoBind';

test('autoBind works', t => {
  class MyClass {
    returnThis() {
      return this || 0;
    }
    setState() {
    }
  }

  var obj = new MyClass();

  var unbound = obj.returnThis;
  var bound = autoBind(obj).returnThis;

  t.is(unbound(), 0, 'unbound');

  t.true(bound() === obj, 'bound');
});

test('autoBind filter works', t => {
  class MyClass {
    constructor() {
      this.name = 'myclass';
    }
    returnThis() {
      return this || 0;
    }
    notBound() {
      return this || 1;
    }
    setState() {
    }
  }

  var obj = new MyClass();

  var unbound = autoBind(obj, { notBound: true }).notBound;

  t.is(unbound(), 1, 'unbound');

  var boundObj = autoBind(obj, function(name) {
    return name !== 'notBound';
  });

  const returnThisBound = boundObj.returnThis;
  const notBound = boundObj.notBound;

  t.is(returnThisBound(), boundObj, 'returnThisBound');

  t.is(notBound(), 1, 'notBound');
});
