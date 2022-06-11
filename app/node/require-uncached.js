// https://www.30secondsofcode.org/js/s/require-uncached

const requireUncached = module => {
  delete require.cache[require.resolve(module)]
  return require(module)
}

const fs =requireUncached('fs')