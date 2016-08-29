import * as lodash from "lodash"

console.log(
  lodash.map({
    a: 1,
    b: 2,
    c: 3
  }, function (value, key) {
    return { key, value }
  })
)