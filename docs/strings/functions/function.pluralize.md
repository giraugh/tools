[@giraugh/tools](../../modules.md) / [strings](../strings.md) / pluralize

# Function: pluralize()

Take a string and pluralize it depending on a count

## Example

```ts
pluralize("cake", 1) === "cake";
```

## Example

```ts
pluralize("cake", 2) === "cakes";
```

## Example

```ts
pluralize("cake", 0) === "cakes";
```

## Example

```ts
pluralize("child", 2, "children") === "children";
```

> **pluralize**(
> str: `string`,
> count: `number`,
> plural: `string` = `...`): `string`

## Parameters

| Parameter | Type     | Description                                                                             |
| :-------- | :------- | :-------------------------------------------------------------------------------------- |
| str       | `string` | The singular form of the word                                                           |
| count     | `number` | The amount of things you have                                                           |
| plural    | `string` | Optionally, a plural form of the word. This is `str` with an `s` on the end by default. |

## Returns

`string`

## Defined in

[strings/pluralize.ts:12](https://github.com/giraugh/tools/blob/a6c3d4a/lib/strings/pluralize.ts#L12)
