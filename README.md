# @use-it/prev-prop
[![npm version](https://badge.fury.io/js/%40use-it%2Fprev-prop.svg)](https://badge.fury.io/js/%40use-it%2Fprev-prop)
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors)

A custom React Hook that maintains a previous value for a prop (or any other value).
Based on [a tweet](https://twitter.com/chrisachard/status/1177308524877144065)
by [Chris Achard](https://github.com/chrisachard).

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

This hook returns the previous value of the prop. Initially, this value will be `undefined`.

## Example

Let's look at some sample code. Here is a `Count` component that displays the count and the previous count.

```js
import React from 'react';
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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://donavon.com"><img src="https://avatars3.githubusercontent.com/u/887639?v=4" width="100px;" alt="Donavon West"/><br /><sub><b>Donavon West</b></sub></a><br /><a href="#infra-donavon" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/donavon/use-prev-prop/commits?author=donavon" title="Tests">⚠️</a> <a href="#example-donavon" title="Examples">💡</a> <a href="#ideas-donavon" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-donavon" title="Maintenance">🚧</a> <a href="#review-donavon" title="Reviewed Pull Requests">👀</a> <a href="#tool-donavon" title="Tools">🔧</a> <a href="https://github.com/donavon/use-prev-prop/commits?author=donavon" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/chrisachard"><img src="https://avatars2.githubusercontent.com/u/34973?v=4" width="100px;" alt="chrisachard"/><br /><sub><b>chrisachard</b></sub></a><br /><a href="#ideas-chrisachard" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="http://lemol.github.io"><img src="https://avatars2.githubusercontent.com/u/1035379?v=4" width="100px;" alt="Leza Morais Lutonda"/><br /><sub><b>Leza Morais Lutonda</b></sub></a><br /><a href="https://github.com/donavon/use-prev-prop/commits?author=lemol" title="Code">💻</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
