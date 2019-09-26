# @use-it/prev-prop

A custom React Hook that maintains a previous value for a prop (or any other value).

[![npm version](https://badge.fury.io/js/%40use-it%2Fprev-prop.svg)](https://badge.fury.io/js/%40use-it%2Fprev-prop)

## Installation

```bash
$ npm i @use-it/prev-prop
```

or

```bash
$ yarn add @use-it/prev-prop
```

## Usage

Here is a basic setup.

```js
const previousProp = usePrevProp(prop);
```

### Parameters

Here are the parameters that you can use.

| Parameter  | Description                                                                      |
| :--------- | :------------------------------------------------------------------------------- |
| `prop` | The current prop |

### Return

This hook returns the previous value of the prop.

## Example

Let's look at some sample code. Here is a `Count` component that displays the count and the previous count.

```js
import React, { useState } from 'react';
import usePrevProp from '@use-it/prev-prop';

const Count = ({ count }) => {
  const prevCount = usePrevProp(count);

  return (
    <div>
      <div>Current Count: {count}</div>
      <div>Prev Count: {prevCount}</div>
    </div>
  );
};

export default Count;
```

## License

**[MIT](LICENSE)** Licensed
