# react-class

> Smart Auto-Binding for your React components.

## Features

 * auto-bind methods
 * optimized to only auto-bind non-lifecycle methods

## Install

```sh
$ npm install @zippytech/react-class --save
```

## Usage

Instead of extending `React.Component` you have to extend the class exported by `@zippytech/react-class`.

```jsx
import Component from '@zippytech/react-class'
// or import { Component } from '@zippytech/react-class

class MyApp extends Component {
  render() {
    return <div {...props} onClick={this.onClick}>
      //onClick is auto-bound to "this", so you can keep your code dry
    </div>
  }

  onClick(){
    console.log(this)
    // this is correctly bound to the component instance
  }
}
```

## `autoBind` only

If you don't want to extend the class exported by `@zippytech/react-class` and instead just want autobinding, you can just import the `autoBind` function directly.

```jsx
import autoBind from '@zippytech/react-class/autoBind'

// or

import { autoBind } from '@zippytech/react-class'

// or

var autoBind = require('@zippytech/react-class/autoBind')
````

After importing/require-ing it, call `autoBind` in the component constructor:

```jsx
import autoBind from '@zippytech/react-class/autoBind'

class MyApp extends React.Component {
  constructor(props) {
    super(props)

    autoBind(this)
  }

  render() {
    // ... your rendering logic
  }
}
```

### autoBind filtering

`autoBind` supports a second param, that can be used to filter what gets auto-binding or not. It can be a function or an object.

 * `autoBind(obj, filterFn)` - only those methods in `obj` are bound to the object for which the `filterFn` returns true
 * `autoBind(obj, skipObject)` - the methods whose names are found in the `skipObject` as truthy are skipped from autobinding. Eg: `autoBind(obj, { notBound: true, log: true })` will not bind the `obj.notBound` and `obj.log` methods to the `obj` object. 

## FAQ

### What problems does it solve?

Autobinding, which is a nice-to-have feature!

### What if I want to remove it in the future?

`@zippytech/react-class` is a very thin layer around `React.Component`, so just in case you decide removing it in the future, you'll be safe and will only have to do very minor code changes.

We're not doing anything magical!

## LICENSE

#### [Apache2](./LICENSE)
