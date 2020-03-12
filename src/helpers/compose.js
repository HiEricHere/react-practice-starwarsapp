const compose = (f, g) => x => f(g(x))
const reducer = pipeline => pipeline.reduce((pipe, fxn) => compose(pipe, fxn), x => x)
const lens = prop => obj => obj[prop]

export { compose, reducer, lens }