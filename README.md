# package-alt-yaml
Quickly manipulate JSON files

## Installation

```bash
npm install --global package-alt-yaml
```

## Command-line usage

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
ynpm install [package] # Won't update package.yaml
ynpm install --save [package] # Won't update package.yaml
```
