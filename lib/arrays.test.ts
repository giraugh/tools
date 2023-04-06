import { describe, it, expect } from 'vitest'
import { chunkArray, groupArrayBy, range } from './arrays'

describe('range', () => {
  it('works for example 1', () => {
    expect(range(1, 3)).toEqual([1, 2, 3])
  })

  it('works for example 2', () => {
    expect(range(3, 8)).toEqual([3, 4, 5, 6, 7, 8])
  })
  
  it('works for example 3', () => {
    expect(range(5, 1, -1)).toEqual([5, 4, 3, 2, 1])
  })
})


describe('chunkArray', () => {
  it('works for example 1', () => {
    const chunks = chunkArray([1, 2, 3, 4, 5, 6], 3)
    expect(chunks).toHaveLength(2)
    expect(chunks).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ])
  })

  it('works for example 2', () => {
    const chunks = chunkArray([1, 2, 3, 4, 5, 6, 7], 3)
    expect(chunks).toHaveLength(3)
    expect(chunks).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7]
    ])
  })
})


describe('groupArrayBy', () => {
  it('works for example 1', () => {
    const groups = groupArrayBy([1, 2, 3, 4], x => x % 2)
    expect(groups).toHaveLength(2)
    expect(groups).toContainEqual([1, 3])
    expect(groups).toContainEqual([2, 4])
  })

  it('works for example 2', () => {
    const peopleByAge = groupArrayBy([
    { name: 'John', age: 20 },
    { name: 'Claire', age: 20 },
    { name: 'Ben', age: 23 }
    ], person => person.age)
    expect(peopleByAge).toHaveLength(2)
    expect(peopleByAge).toContainEqual([
      { name: 'John', age: 20, },
      { name: 'Claire', age: 20, },
    ])
    expect(peopleByAge).toContainEqual([
      { name: 'Ben', age: 23, },
    ])
  })
})
