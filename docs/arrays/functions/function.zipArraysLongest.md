[@giraugh/tools](../../modules.md) / [arrays](../arrays.md) / zipArraysLongest

# Function: zipArraysLongest()

Zip a collection of arrays to create an array of tuples from matching indices.
Use the length of the longest array for the output, filling the rest with the provided value.

## Note

the zipped array has the length of the longest input array

## Example

```ts
zipArraysLongest(null, [1, 2, 3], ["a", "b", "c"]) ===
  [
    [1, "a"],
    [2, "b"],
    [3, "c"],
  ];
```

## Example

```ts
zipArraysLongest(null, [1], ["a", "b", "c"]) ===
  [
    [1, "a"],
    [null, "b"],
    [null, "c"],
  ];
```

> **zipArraysLongest**\<TArrs, TFill\>(fill: `TFill`, ...arrays: `TArrs`): [`ZippedLongest`](../types/type-alias.ZippedLongest.md)\<`TFill`, `TArrs`\>

## Type parameters

| Parameter                     |
| :---------------------------- |
| TArrs _extends_ `unknown`[][] |
| TFill                         |

## Parameters

| Parameter | Type    | Description                           |
| :-------- | :------ | :------------------------------------ |
| fill      | `TFill` | the value to fill empty indices with. |
| ...arrays | `TArrs` | -                                     |

## Returns

[`ZippedLongest`](../types/type-alias.ZippedLongest.md)\<`TFill`, `TArrs`\>

the zipped array

## Defined in

[arrays/zipArraysLongest.ts:14](https://github.com/giraugh/tools/blob/a6c3d4a/lib/arrays/zipArraysLongest.ts#L14)
