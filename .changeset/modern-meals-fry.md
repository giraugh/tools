---
"@giraugh/tools": major
---

Change return of `groupArrayBy` to an object of groups.

This allows for more flexibility when working with groups. To migrate existing code that uses groupArrayBy, simple wrap the call with `Object.values()`

```ts
// If you had this before
const usersByRole = groupArrayBy(users, user => user.role)

// Change it to this
const usersByRole = Object.values(groupArrayBy(users, user => user.role))
```
