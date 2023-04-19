[@giraugh/tools](../../modules.md) / [objects](../objects.md) / getKey

# Function: getKey()

Higher order function to get a key from an object

## Example

```ts
getKey("name")({ name: "John" }) === "John";
```

> **getKey**\<TObj\>(key: _keyof_ `TObj`): `Function`

## Type parameters

| Parameter |
| :-------- |
| TObj      |

## Parameters

| Parameter | Type           | Description         |
| :-------- | :------------- | :------------------ |
| key       | _keyof_ `TObj` | the key to retrieve |

## Returns

`Function`

function that retrieves the key from an object

> (obj: `TObj`): `TObj`[*keyof* `TObj`]

### Parameters

| Parameter | Type   |
| :-------- | :----- |
| obj       | `TObj` |

### Returns

`TObj`[*keyof* `TObj`]

## Defined in

[objects/getKey.ts:8](https://github.com/giraugh/tools/blob/a6c3d4a/lib/objects/getKey.ts#L8)
