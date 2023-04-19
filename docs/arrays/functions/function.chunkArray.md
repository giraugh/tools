[@giraugh/tools](../../modules.md) / [arrays](../arrays.md) / chunkArray

# Function: chunkArray()

Chunk array into an array of chunks of given size

## Note

this can return partial chunks

## Example

```ts
chunkArray([1, 2, 3, 4, 5, 6], 3) ===
  [
    [1, 2, 3],
    [4, 5, 6],
  ];
```

## Example

```ts
chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3], [4, 5, 6], [7]];
```

> **chunkArray**\<T\>(array: `T`[], chunkSize: `number`): `T`[][]

## Type parameters

| Parameter |
| :-------- |
| T         |

## Parameters

| Parameter | Type     | Description                   |
| :-------- | :------- | :---------------------------- |
| array     | `T`[]    | array to chunk                |
| chunkSize | `number` | number of items in each chunk |

## Returns

`T`[][]

array of chunks

## Defined in

[arrays/chunkArray.ts:11](https://github.com/giraugh/tools/blob/a6c3d4a/lib/arrays/chunkArray.ts#L11)
