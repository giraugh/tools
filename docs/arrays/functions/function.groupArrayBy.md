[@giraugh/tools](../../modules.md) / [arrays](../arrays.md) / groupArrayBy

# Function: groupArrayBy()

Group an array using a grouping function

## Example

```ts
groupArrayBy([1, 2, 3, 4], (x) => x % 2) ===
  [
    [1, 3],
    [2, 4],
  ];
```

## Example

```ts
const peopleByAge = groupArrayBy(
  [
    { name: "John", age: 20 },
    { name: "Claire", age: 20 },
    { name: "Ben", age: 23 },
  ],
  (person) => person.age
);
peopleByAge ===
  [
    [
      { name: "John", age: 20 },
      { name: "Claire", age: 20 },
    ],
    [{ name: "Ben", age: 23 }],
  ];
```

> **groupArrayBy**\<T\>(array: `T`[], groupFn: `Function`): `T`[][]

## Type parameters

| Parameter |
| :-------- |
| T         |

## Parameters

| Parameter | Type                              | Description                                                                                                     |
| :-------- | :-------------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| array     | `T`[]                             | the array to create groups from                                                                                 |
| groupFn   | (`element`: `T`) => `PropertyKey` | the keys to group by. Elements which return the same key when passed to this function will be in the same group |

## Returns

`T`[][]

groups built from the array

## Defined in

[arrays/groupArrayBy.ts:22](https://github.com/giraugh/tools/blob/a6c3d4a/lib/arrays/groupArrayBy.ts#L22)
