# wirecase-react-input

> Wirecase Input Component.

[![NPM](https://img.shields.io/npm/v/wirecase-react-input.svg)](https://www.npmjs.com/package/wirecase-react-input) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/wirecase-react-input.svg?style=flat-square
[npm-url]: https://npmjs.org/package/wirecase-react-input
[download-image]: https://img.shields.io/npm/dm/wirecase-react-input.svg?style=flat-square
[download-url]: https://npmjs.org/package/wirecase-react-input

## Install

```bash
npm install --save wirecase-react-input
```

[![wirecase-react-input](https://nodei.co/npm/wirecase-react-input.png?downloads=true)](https://npmjs.org/package/wirecase-react-input)

## Usage

```jsx
import React, { Component } from 'react';

import WirecaseReactJSONViewer from 'wirecase-react-input';

class Example extends Component {
  render() {
    return (
      <WirecaseReactJSONViewer
        json={[
          {
            task: 'Learn React',
            done: true,
          },
          {
            task: 'Write Book',
            done: false,
          },
        ]}
      />
    );
  }
}
```

# Demo

[http://denisu08.github.io/wirecase-react-input](http://denisu08.github.io/wirecase-react-input/)

# JSFiddle Example

[http://jsfiddle.net/denisu08/61fwqcg5/](http://jsfiddle.net/denisu08/61fwqcg5/)

# What

![alt pic](https://raw.githubusercontent.com/denisu08/wirecase-react-input/master/pic1.png)
![alt pic](https://raw.githubusercontent.com/denisu08/wirecase-react-input/master/pic2.png)

## License

MIT © [denisu08](https://github.com/denisu08)
