[@giraugh/tools](../../modules.md) / [strings](../strings.md) / truncateWithEllipsis

# Function: truncateWithEllipsis()

Truncate a string if its too long, adding an ellipsis if truncation occurs

## Note

the ellipsis should be shorter than the maxlength for proper results

## Example

```ts
truncateWithEllipsis("hello there", 3) === "he…";
```

## Example

```ts
truncateWithEllipsis("hello there", 30) === "hello there";
```

## Example

```ts
truncateWithEllipsis("hello there", 7, "...") === "hell...";
```

> **truncateWithEllipsis**(
> string: `string`,
> maxLength: `number` = `50`,
> ellipsis: `string` = `'…'`): `string`

## Parameters

| Parameter | Type     | Default value | Description                                                          |
| :-------- | :------- | :------------ | :------------------------------------------------------------------- |
| string    | `string` | undefined     | the string to truncate                                               |
| maxLength | `number` | 50            | the maximum length of the returned string                            |
| ellipsis  | `string` | '…'           | the ellipsis to add to the string. Defaults to an ellipsis character |

## Returns

`string`

the truncated string with length <= `maxLength`

## Defined in

[strings/truncateWithEllipsis.ts:12](https://github.com/giraugh/tools/blob/a6c3d4a/lib/strings/truncateWithEllipsis.ts#L12)
