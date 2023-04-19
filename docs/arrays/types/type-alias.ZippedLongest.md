[@giraugh/tools](../../modules.md) / [arrays](../arrays.md) / ZippedLongest

# Type alias: ZippedLongest\<TFill, TArrs\>

> **ZippedLongest**: \<`TFill`, `TArrs`\> \{ [TArr in keyof TArrs]: TArrs[TArr] extends (infer V)[] ? V \| TFill : never }[]

## Type parameters

| Parameter                     |
| :---------------------------- |
| TFill                         |
| TArrs _extends_ `unknown`[][] |

## Defined in

[arrays/zipArraysLongest.ts:1](https://github.com/giraugh/tools/blob/a6c3d4a/lib/arrays/zipArraysLongest.ts#L1)
