export type EditDistanceOptions = {
  weights: {
    insertion?: number,
    deletion?: number,
    substition?: number,
  }
}

/**
 * Compute the levenshtein edit distance between two strings.
 * Equivalent to the the number of edits necessary to get from source to target.
 * @param source string to use as source
 * @param target target string
 * @returns the number of changes to edit source into target
 * 
 * @example editDistance('snail', 'mail') === 2
 */
export const editDistance = (source: string, target: string, options?: Partial<EditDistanceOptions>): number => {
  // Create dynamic programming matrix
  const dynMat = Array(target.length + 1).fill(-1)
    .map((_, i) => Array(source.length + 1).fill(-1)
      .map((_, j) => i === 0
        ?  j * (options?.weights?.deletion ?? 1) 
        : (j === 0 ? (i * (options?.weights?.insertion ?? 1)) : -1) ))


  // Compute the matrix values
  for (let j = 1; j <= target.length; j++) {
    for (let i = 1; i <= source.length; i++) {
      const ind = source[i - 1] === target[j - 1] ? 0 : 1
      dynMat[j][i] = Math.min(
        dynMat[j][i - 1] + (options?.weights?.deletion ?? 1), // deletion
        dynMat[j - 1][i] + (options?.weights?.insertion ?? 1), // insertion
        dynMat[j - 1][i - 1] + (options?.weights?.substition ?? 1) * ind, // substitution
      )
    }
  }

  // Return resulting value from matrix
  return dynMat[target.length][source.length]
}

// Tests
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('works for example 1', () => {
    expect(editDistance('snail', 'mail')).toBe(2)
  })

  it('correctly calculates the distance between different words', () => {
    expect(editDistance('cake', 'bake')).toBe(1)
    expect(editDistance('telethon', 'melatonin')).toBe(5)
  })

  it('correctly calculates the distance between identical words', () => {
    expect(editDistance('superlative', 'superlative')).toBe(0)
  })

  it('correctly calculates the distance between a word and an empty string', () => {
    expect(editDistance('', 'gracious')).toBe(8)
  })

  it('uses provided operation weights', () => {
    expect(editDistance('', 'abc', { weights: { insertion: 2 } })).toBe(6)
    expect(editDistance('abc', '', { weights: { deletion: 2 } })).toBe(6)
    expect(editDistance('abc', 'defg', { weights: { substition: 2, insertion: 3 } })).toBe(9)
  })
}
