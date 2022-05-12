import useBoolean from "../";
import { describe, test, expect } from 'vitest'

const result = (defaultValue?: boolean) => useBoolean(defaultValue)

describe('useBoolean', () => {
  test('should be defined', () => {
    expect(useBoolean).toBeDefined()
  })

  test('test on method', () => {
    const res = result()
    expect(res[0]).toBe(false);
  })
})