[@giraugh/tools](../../modules.md) / [promises](../promises.md) / resolveObject

# Function: resolveObject()

Resolve all of the fields of an object in parallel

## Example

```ts
(await resolveObject({
  a: Promise.resolve("a"),
  b: Promise.resolve("b"),
})) === { a: "a", b: "b" };
```

## Example

```ts
await resolveObject({
  a: Promise.resolve("a"),
  b: Promise.reject("b"),
}); // throws error
```

> **resolveObject**\<T\>(object: `T`): `Promise`\<`Resolved`\<`T`\>\>

## Type parameters

| Parameter                   |
| :-------------------------- |
| T _extends_ `PromiseRecord` |

## Parameters

| Parameter | Type | Description                              |
| :-------- | :--- | :--------------------------------------- |
| object    | `T`  | An object where every field is a promise |

## Returns

`Promise`\<`Resolved`\<`T`\>\>

The same object with every field resolved

## Defined in

[promises/resolveObject.ts:19](https://github.com/giraugh/tools/blob/a6c3d4a/lib/promises/resolveObject.ts#L19)
