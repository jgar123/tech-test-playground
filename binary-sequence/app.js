function alternatingSequence(a) {

  let count = 0

  for (let i = 0; i < a.length; i++) {

    if (i % 2 === 0 && a[i] === 1) {
      count++
    }

    if (i % 2 === 1 && a[i] === 0) {
      count++
    }

  }

  return Math.min(count, a.length - count)

}

module.exports = { alternatingSequence }
