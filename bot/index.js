'use strict';

module.exports = function (listener) {
  return function (context, req) {
    listener(req, context.res);
  };
};




