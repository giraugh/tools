[@giraugh/tools](../../modules.md) / [promises](../promises.md) / filterAsync

# Function: filterAsync()

Filter an array in parallel using an async predicate function.

## Example

```ts
(await filterAsync([1, 2, 3], (x) => Promise.resolve(x % 2 === 0))) === [2];
```

> **filterAsync**\<T\>(array: `T`[], asyncPredicateFn: `Function`): `Promise`\<`T`[]\>

## Type parameters

| Parameter |
| :-------- |
| T         |

## Parameters

| Parameter        | Type                                                                  | Description                                 |
| :--------------- | :-------------------------------------------------------------------- | :------------------------------------------ |
| array            | `T`[]                                                                 | the array to filter                         |
| asyncPredicateFn | (`value`: `T`, `i`: `number`, `arr`: `T`[]) => `Promise`\<`boolean`\> | the predicate function as an async function |

## Returns

`Promise`\<`T`[]\>

a promise of the filtered array. it will resolve when all of the async predicates resolve

## Defined in

[promises/filterAsync.ts:9](https://github.com/giraugh/tools/blob/a6c3d4a/lib/promises/filterAsync.ts#L9)
