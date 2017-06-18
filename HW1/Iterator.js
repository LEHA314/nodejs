let object = {
  a: 10,
  b: 20,
  c: 30,
  d: 40
}

object[Symbol.iterator] = function() {
  const arrProp = Object.keys(this);
  let index = 0;

  return {
    next() {
      if (index < arrProp.length) {
        return {
          done: false,
          value: arrProp[index++]
        };
      } else {
        return {
          done: true
        };
      }
    }

  }
};

for (let num of object) {
  console.log(num);
}