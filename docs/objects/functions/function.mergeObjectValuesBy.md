[@giraugh/tools](../../modules.md) / [objects](../objects.md) / mergeObjectValuesBy

# Function: mergeObjectValuesBy()

Merge the values of an array of objects using the specified merging function

## Example

```ts
const obj = mergeObjectValuesBy(
  [{ test: "some" }, { test: null }],
  (a, b) => a || b
);
obj.test === "some";
```

> **mergeObjectValuesBy**\<TKeys, TObj\>(objects: `TObj`[], mergeFn: `Function`): `TObj`

## Type parameters

| Parameter                                     |
| :-------------------------------------------- |
| TKeys _extends_ `PropertyKey`                 |
| TObj _extends_ `Record`\<`TKeys`, `unknown`\> |

## Parameters

| Parameter | Type                                                            | Description                                    |
| :-------- | :-------------------------------------------------------------- | :--------------------------------------------- |
| objects   | `TObj`[]                                                        | the array of objects to merge                  |
| mergeFn   | (`a`: `TObj`[`TKeys`], `b`: `TObj`[`TKeys`]) => `TObj`[`TKeys`] | a function which defines the merging operation |

## Returns

`TObj`

## Defined in

[objects/mergeObjectValuesBy.ts:10](https://github.com/giraugh/tools/blob/a6c3d4a/lib/objects/mergeObjectValuesBy.ts#L10)
