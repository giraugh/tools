[@giraugh/tools](../../modules.md) / [interpolation](../interpolation.md) / lerp

# Function: lerp()

Get a value linearly interpolated between two endpoints.

## Example

```ts
lerp(0, 4, 0) === 0;
```

## Example

```ts
lerp(0, 4, 0.5) === 2;
```

## Example

```ts
lerp(0, 4, 1) === 4;
```

> **lerp**(
> a: `number`,
> b: `number`,
> t: `number`): `number`

## Parameters

| Parameter | Type     | Description                                               |
| :-------- | :------- | :-------------------------------------------------------- |
| a         | `number` | the end point for the interpolation                       |
| b         | `number` | the start point for the interpolation                     |
| t         | `number` | the amount to interpolate. A value in the range `0<=t<=1` |

## Returns

`number`

the value that is `t%` from `a` to `b`

## Defined in

[interpolation/lerp.ts:12](https://github.com/giraugh/tools/blob/a6c3d4a/lib/interpolation/lerp.ts#L12)
