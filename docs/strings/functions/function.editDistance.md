[@giraugh/tools](../../modules.md) / [strings](../strings.md) / editDistance

# Function: editDistance()

Compute the levenshtein edit distance between two strings.
Equivalent to the the number of edits necessary to get from source to target.

## Example

```ts
editDistance("snail", "mail") === 2;
```

> **editDistance**(source: `string`, target: `string`): `number`

## Parameters

| Parameter | Type     | Description             |
| :-------- | :------- | :---------------------- |
| source    | `string` | string to use as source |
| target    | `string` | target string           |

## Returns

`number`

the number of changes to edit source into target

## Defined in

[strings/editDistance.ts:10](https://github.com/giraugh/tools/blob/a6c3d4a/lib/strings/editDistance.ts#L10)
