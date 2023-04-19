[@giraugh/tools](../../modules.md) / [arrays](../arrays.md) / range

# Function: range()

Create an array of integers in the specified range

## Example

```ts
range(1, 3) === [1, 2, 3];
```

## Example

```ts
range(3, 8) === [3, 4, 5, 6, 7, 8];
```

## Example

```ts
range(5, 1, -1) === [5, 4, 3, 2, 1];
```

> **range**(
> start: `number`,
> end: `number`,
> interval: `number` = `1`): `number`[]

## Parameters

| Parameter | Type     | Default value | Description                                          |
| :-------- | :------- | :------------ | :--------------------------------------------------- |
| start     | `number` | undefined     | start of range (inclusive)                           |
| end       | `number` | undefined     | end of range (inclusive)                             |
| interval  | `number` | 1             | the jump between successive elements (defaults to 1) |

## Returns

`number`[]

the range as an array of numbers

## Defined in

[arrays/range.ts:11](https://github.com/giraugh/tools/blob/a6c3d4a/lib/arrays/range.ts#L11)
