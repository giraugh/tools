[@giraugh/tools](../../modules.md) / [arrays](../arrays.md) / partitionArray

# Function: partitionArray()

Split an array into two subarrays using a predicate function

## Example

```ts
const [even, odd] = partitionArray([1, 2, 3, 4], (x) => x % 2 === 0);
even === [2, 4];
odd === [1, 3];
```

> **partitionArray**\<T\>(array: `T`[], predicateFn: `Function`): [`T`[], `T`[]]

## Type parameters

| Parameter |
| :-------- |
| T         |

## Parameters

| Parameter   | Type                    | Description                          |
| :---------- | :---------------------- | :----------------------------------- |
| array       | `T`[]                   | the array to partition               |
| predicateFn | (`t`: `T`) => `boolean` | the boolean predicate to split along |

## Returns

[`T`[], `T`[]]

the two partitions

## Defined in

[arrays/partitionArray.ts:12](https://github.com/giraugh/tools/blob/a6c3d4a/lib/arrays/partitionArray.ts#L12)
