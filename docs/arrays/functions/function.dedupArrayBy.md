[@giraugh/tools](../../modules.md) / [arrays](../arrays.md) / dedupArrayBy

# Function: dedupArrayBy()

Deduplicate the values in an array using a specified key function.
Preserves order.

## Example

```ts
const animals = [
  { id: 1, animal: "whale" },
  { id: 1, animal: "gorilla" },
  { id: 2, animal: "ant" },
];
dedupArrayBy(animals, (animal) => animal.id) ===
  [
    { id: 1, animal: "whale" },
    { id: 2, animal: "ant" },
  ];
```

> **dedupArrayBy**\<T\>(array: `T`[], keyFn: `Function`): `T`[]

## Type parameters

| Parameter             |
| :-------------------- |
| T _extends_ `unknown` |

## Parameters

| Parameter | Type                        | Description                              |
| :-------- | :-------------------------- | :--------------------------------------- |
| array     | `T`[]                       | the array to deduplicate                 |
| keyFn     | (`t`: `T`) => `PropertyKey` | a function to generate a key to dedup by |

## Returns

`T`[]

## Defined in

[arrays/dedupArrayBy.ts:18](https://github.com/giraugh/tools/blob/a6c3d4a/lib/arrays/dedupArrayBy.ts#L18)
