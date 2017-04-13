# package-alt-cson
Use `package.cson` instead of `package.json`

## Requirements

* Node.js ≥ 6.0.0 and npm

## Installation

```bash
npm install --global package-alt-cson
```

## Command-line usage
Replace `npm` with the following commands

### `npm-cson`, `cnpm`, `npm-cson-update`, `cnpm-update`
Invoke npm command and update `package.cson` if necessary

```bash
cnpm [argv]
```

**Example**

```bash
cnpm install --save [package] # Would update package.cson
cnpm install [package] # Won't update package.cson
```

### `npm-cson-preserve`, `cnpm-preserve`
Invoke npm command but preserve `package.cson`

```bash
cnpm-preserve [argv]
```

**Example**

```bash
cnpm-preserve install [package] # Won't update package.cson
cnpm-preserve install --save [package] # Won't update package.cson
```

### Notes

#### `cnpm init`

This program doesn't read data from stdin therefore `cnpm init` won't work.
In order to init a "cnpm package", do the following instead:

```bash
npm i -g js-cson # CLI to convert json to cson
npm init # Now you have a package.json
js-cson package.json > package.cson # Now you have a package.cson
```

## Development

### Requirements

* Node.js ≥ 6.0.0 and npm

* package-alt-cson

### Preparation

```bash
npm install --global package-alt-cson
```

### Test

```bash
cnpm test
```

## License

[MIT License](https://github.com/ksxnodeapps/package-alt-cson/blob/master/LICENSE.md)
