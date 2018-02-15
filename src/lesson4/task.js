/*
 Write a function that creates custom set object. Function
 accepts single optional parameter (array) do define initial
 set content.
 Set should have add(), has(), delete(), forEach(), clear() methods
 and size property. Should not use es6 objects Set, WeakSet,
 but work in similar way. Set should preserve addition order
 in forEach() method.
 mySet = createSet(['a', 'b', 'c'])
 */

function unique(value, index, self) {
  return self.indexOf(value) === index || Number.isNaN(value);
}

class SetCreator {
  constructor(arr = []) {
    this.data = arr.filter(unique);
  }

  get size() {
    return this.data.length;
  }

  add(key) {
    this.data.push(key);
    this.data = this.data.filter(unique);
    return this;
  }

  clear() {
    this.data = [];
  }

  delete(key) {
    this.data = this.data.filter(el => el !== key);
  }

  entries() {
    return this[Symbol.iterator]();
  }

  forEach(callback) {
    for (let i = 0; i < this.data.length; i += 1) {
      callback(this.data[i], i, this.data);
    }
  }

  has(key) {
    return this.data.indexOf(key) !== -1;
  }

  values() {
    return this[Symbol.iterator]();
  }

  keys() {
    return this[Symbol.iterator]();
  }

  [Symbol.iterator]() {
    const scope = this;
    let keys = null;
    let index = 0;
    return {
      next() {
        if (keys === null) {
          keys = scope.data;
        }
        const value = keys[index];
        const done = (index += 1) >= keys.length;
        return {
          value, done,
        };
      },
    };
  }
}

export function createSet(arr) {
  return new SetCreator(arr);
}

/*
 Write a function that creates custom map object. Function
 accepts single optional parameter (array) do define initial
 map content.
 Map should have set(), get(), has(), delete(), forEach(), clear()
 methods and size property. Should not use es6 objects Map, WeakMap,
 but work in similar way. Map should preserve addition order
 in forEach() method.
 myMap = createMap([['a', 1], ['b', 2], ['c', 3]])
 */
function uniqueMap(value, index, self) {
  function find(arr, value) {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i][0] === value) {
        return i;
      }
    }
  }
  return find(self, value[0]) === index || Number.isNaN(value[0]);
}
class MapCreator {
  constructor(arr = []) {
    this.data = arr.filter(uniqueMap);
  }

  get size() {
    return Object.keys(this.data).length;
  }

  set(key, value) {
    if (!this.get(key)) {
      this.data.push([key, value]);
    }
  }

  get(key) {
    return this.data.find(x => x[0] === key);
  }

  clear() {
    this.data = [];
  }

  delete(key) {
    this.data = this.data.filter(x => x[0] !== key);
  }

  entries() {
    return this[Symbol.iterator]();
  }

  forEach(callback, context = this) {
    const it = this.entries();
    do {
      const r = it.next();
      if (r.done) break;
      callback.call(context, r.value[1], r.value[0], this);
    } while (true);
  }

  has(key) {
    return !this.data.every(x => x.indexOf(key) === -1);
  }

  * values() {
    for (const [, value] of this.data) {
      yield value;
    }
  }

  * keys() {
    for (const [key] of this.data) {
      yield key;
    }
  }

  [Symbol.iterator]() {
    const scope = this;
    let keys = null;
    let index = 0;
    return {
      next() {
        if (keys === null) {
          keys = scope.data;
        }
        const [k, v] = keys[index] || [];
        const done = (index += 1) > keys.length;
        return {
          value: [k, v], done,
        };
      },
    };
  }
}

export function createMap(arr) {
  return new MapCreator(arr);
}

export default {
  createSet,
  createMap,
};
