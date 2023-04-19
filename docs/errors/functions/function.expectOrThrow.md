[@giraugh/tools](../../modules.md) / [errors](../errors.md) / expectOrThrow

# Function: expectOrThrow()

Assert that a value is available.
Throw an error with the specified message if the provided value is null or undefined

## Example

```ts
expectOrThrow(1) === 1;
```

## Example

```ts
expectOrThrow(null); // throws error
```

## Example

```ts
expectOrThrow(null, ":("); // throws error w/ message ':('
```

> **expectOrThrow**\<T\>(t: `undefined` \| `null` \| `T`, message: `string` = `'Expected argument to be defined'`): `T`

## Type parameters

| Parameter |
| :-------- |
| T         |

## Parameters

| Parameter | Type                         | Default value                     |
| :-------- | :--------------------------- | :-------------------------------- |
| t         | `undefined` \| `null` \| `T` | undefined                         |
| message   | `string`                     | 'Expected argument to be defined' |

## Returns

`T`

the value

## Defined in

[errors/expectOrThrow.ts:12](https://github.com/giraugh/tools/blob/a6c3d4a/lib/errors/expectOrThrow.ts#L12)
