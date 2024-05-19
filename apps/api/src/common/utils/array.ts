import * as _ from 'lodash';

export function getUniqueKeysFromTArray<T>(data: T[]) {
  return _.uniq(_.flatMap(data, (obj) => Object.keys(obj)));
}
