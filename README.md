# package-alt-yaml
Use `package.yaml` instead of `package.json`

## Requirements

* Node.js ≥ 6.0.0 and npm

## Installation

```bash
npm install --global package-alt-yaml
```

## Command-line usage
Replace `npm` with the following commands

### `npm-yaml`, `ynpm`, `npm-yaml-update`, `ynpm-update`
Invoke npm command and update `package.yaml` if necessary

```bash
ynpm [argv]
```

**Example**

```bash
ynpm install --save [package] # Would update package.yaml
ynpm install [package] # Won't update package.yaml
```

### `npm-yaml-preserve`, `ynpm-preserve`
Invoke npm command but preserve `package.yaml`

```bash
ynpm-preserve [argv]
```

**Example**

```bash
ynpm-preserve install [package] # Won't update package.yaml
ynpm-preserve install --save [package] # Won't update package.yaml
```

### Notes

#### `ynpm init`

This program doesn't read data from stdin therefore `ynpm init` won't work.
In order to init a "ynpm package", do the following instead:

```bash
npm i -g js-yaml # CLI to convert json to yaml
npm init # Now you have a package.json
js-yaml package.json > package.yaml # Now you have a package.yaml
```

#### `package.yml`

This program works only with <code>package<strong>.yaml</strong></code>,
not <code>package<strong>.yml</strong></code>.

## Development

### Requirements

* Node.js ≥ 6.0.0 and npm

* package-alt-yaml

### Preparation

```bash
npm install --global package-alt-yaml
```

### Test

```bash
ynpm test
```

## License

[MIT License](https://github.com/ksxnodeapps/package-alt-yaml/blob/master/LICENSE.md)
