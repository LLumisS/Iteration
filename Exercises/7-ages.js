'use strict';

const ages = (persons) => {
  const res = {};
  for (const name in persons) {
    const date = persons[name];
    res[name] = date.died - date.born;
  }
  return res;
};

module.exports = { ages };
