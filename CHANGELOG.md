# @giraugh/tools

## 2.3.1

### Patch Changes

- 70cbbfb: Fix typo in editDistance option name

## 2.3.0

### Minor Changes

- a8db3ee: Add weight options to `editDistance`

## 2.2.0

### Minor Changes

- 882ec3c: Add a `settleObject` util that behaves like Promise.allSettled for objects

### Patch Changes

- 882ec3c: Allow `resolveObject` to take a `number` or `symbol` as a key

## 2.1.0

### Minor Changes

- e4aec21: Add clamp utility to math module

## 2.0.0

### Major Changes

- 9334ab0: Change return of `groupArrayBy` to an object of groups.

  This allows for more flexibility when working with groups. To migrate existing code that uses groupArrayBy, simple wrap the call with `Object.values()`

  ```ts
  // If you had this before
  const usersByRole = groupArrayBy(users, (user) => user.role);

  // Change it to this
  const usersByRole = Object.values(groupArrayBy(users, (user) => user.role));
  ```

## 1.7.0

### Minor Changes

- 17a0fa0: Add splitArray util
- 1a3e407: Add intersperseArray utility

## 1.6.0

### Minor Changes

- ced1559: Add splitArrayBy utility

## 1.5.0

### Minor Changes

- ddc1974: Add randomInt utility

## 1.4.0

### Minor Changes

- ab4992c: Add isKeyOfObject type guard utility

## 1.3.0

### Minor Changes

- 3b4a4d1: Add array rotation method

## 1.2.0

### Minor Changes

- 1eebc96: Add logging utils

## 1.1.0

### Minor Changes

- 4b69d30: Add utils for mapping and filtering objects

### Patch Changes

- ba29680: Export types from resolveObject

## 1.0.1

### Patch Changes

- f788708: Fix type of TOBJ in mergeObjectValuesBy being unuseable with interfaces

## 1.0.0

### Major Changes

- c01c3bb: Added documentation and stable version bump

### Minor Changes

- 1c75a62: Add utilities for attempting operations and catching errors

## 0.1.0

### Minor Changes

- 6a7cf5e: Initial release
