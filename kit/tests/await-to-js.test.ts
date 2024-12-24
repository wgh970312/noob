import { expect, test } from 'vitest'
import { sieve } from '~/libs/await-to-js'

test('await-to-js', async () => {
  expect(await sieve(Promise.resolve(1))).toStrictEqual([null, 1])
  expect(await sieve(Promise.reject(1))).toStrictEqual([1, void 0])
  expect(await sieve(Promise.reject(new Error('2')))).toStrictEqual([new Error('2'), void 0])
});
