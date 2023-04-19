[@giraugh/tools](../../modules.md) / [arrays](../arrays.md) / zipArrays

# Function: zipArrays()

Zip a collection of arrays to create an array of tuples from matching indices.

## Note

the zipped array has the length of the shortest input array

## Example

```ts
zipArrays([1, 2, 3], ["a", "b", "c"]) ===
  [
    [1, "a"],
    [2, "b"],
    [3, "c"],
  ];
```

## Example

```ts
zipArrays([1], ["a", "b", "c"]) === [[1, "a"]];
```

> **zipArrays**\<TArrs\>(...arrays: `TArrs`): [`Zipped`](../types/type-alias.Zipped.md)\<`TArrs`\>

## Type parameters

| Parameter                     |
| :---------------------------- |
| TArrs _extends_ `unknown`[][] |

## Parameters

| Parameter | Type    |
| :-------- | :------ |
| ...arrays | `TArrs` |

## Returns

[`Zipped`](../types/type-alias.Zipped.md)\<`TArrs`\>

the zipped array

## Defined in

[arrays/zipArrays.ts:12](https://github.com/giraugh/tools/blob/a6c3d4a/lib/arrays/zipArrays.ts#L12)
