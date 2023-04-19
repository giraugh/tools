[@giraugh/tools](../../modules.md) / [arrays](../arrays.md) / Zipped

# Type alias: Zipped\<TArrs\>

> **Zipped**: \<`TArrs`\> \{ [TArr in keyof TArrs]: TArrs[TArr] extends (infer V)[] ? V : never }[]

## Type parameters

| Parameter                     |
| :---------------------------- |
| TArrs _extends_ `unknown`[][] |

## Defined in

[arrays/zipArrays.ts:1](https://github.com/giraugh/tools/blob/a6c3d4a/lib/arrays/zipArrays.ts#L1)
