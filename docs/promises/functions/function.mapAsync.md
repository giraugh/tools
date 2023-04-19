[@giraugh/tools](../../modules.md) / [promises](../promises.md) / mapAsync

# Function: mapAsync()

Map an array in parallel using an async mapping function.

## Example

```ts
(await mapAsync([1, 2, 3], (x) => Promise.resolve(x + 1))) === [2, 3, 4];
```

> **mapAsync**\<TFrom, TTo\>(array: `TFrom`[], asyncMapFn: `Function`): `Promise`\<`TTo`[]\>

## Type parameters

| Parameter |
| :-------- |
| TFrom     |
| TTo       |

## Parameters

| Parameter  | Type                                                                      | Description                               |
| :--------- | :------------------------------------------------------------------------ | :---------------------------------------- |
| array      | `TFrom`[]                                                                 | the array to filter                       |
| asyncMapFn | (`value`: `TFrom`, `i`: `number`, `arr`: `TFrom`[]) => `Promise`\<`TTo`\> | the mapping function as an async function |

## Returns

`Promise`\<`TTo`[]\>

a promise of the mapped array. it will resolve when all of the elements resolve

## Defined in

[promises/mapAsync.ts:9](https://github.com/giraugh/tools/blob/a6c3d4a/lib/promises/mapAsync.ts#L9)
