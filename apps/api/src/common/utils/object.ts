import _ from 'lodash';
// https://stackoverflow.com/a/37250225/14660191
export function omitByRecursivelyInPlace(value, iteratee) {
  _.each(value, (v, k) => {
    if (iteratee(v, k)) {
      _.unset(value, k);
    } else if (_.isObject(v)) {
      omitByRecursivelyInPlace(v, iteratee);
    }
  });

  return value;
}

export function Cons(obj) {
  _.extend(this, obj);
}

// https://stackoverflow.com/a/38278831/14660191
export function removeEmptyObjects(obj) {
  return _(obj)
    .pickBy(_.isObject) // pick objects only
    .mapValues(removeEmptyObjects) // call only for object values
    .omitBy(_.isEmpty) // remove all empty objects
    .assign(_.omitBy(obj, _.isObject)) // assign back primitive values
    .value();
}

export function cleanupObject(obj) {
  return removeEmptyObjects(omitByRecursivelyInPlace(new Cons(obj), _.isEmpty));
}
