[![npm](https://img.shields.io/npm/v/is-valid-acn.svg)](https://www.npmjs.com/package/is-valid-acn) ![downloads](https://img.shields.io/npm/dt/is-valid-acn.svg) [![CI](https://github.com/wojtekmaj/is-valid-acn/workflows/CI/badge.svg)](https://github.com/wojtekmaj/is-valid-acn/actions)

# Is-Valid-ACN

Check if a number is a valid Australian Company Number (ACN).

## tl;dr

- Install by executing `npm install is-valid-acn` or `yarn add is-valid-acn`.
- Import by adding `import isValidACN from 'is-valid-acn'`.
- Use it by writing `const valid = isValidACN('010499966')`

## See also

- [is-valid-abn](https://github.com/wojtekmaj/is-valid-abn): Check if a number is a valid Australian Business Number (ABN).

## Examples

```ts
isValidACN('010499966'); // true

isValidACN('010 499 966'); // true

isValidACN('010-499-966'); // true
```

## License

The MIT License.

## Author

<table>
  <tr>
    <td >
      <img src="https://avatars.githubusercontent.com/u/5426427?v=4&s=128" width="64" height="64" alt="Wojciech Maj">
    </td>
    <td>
      <a href="https://github.com/wojtekmaj">Wojciech Maj</a>
    </td>
  </tr>
</table>
