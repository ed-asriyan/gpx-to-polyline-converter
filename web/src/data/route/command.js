/**
 * Created by ed on 24/03/2018.
 */

'use strict';

class Command {
  execute(route) {}

  unExecute(route) {}
}

class CommandPoint extends Command {
  constructor(point) {
    super();
    this._point = point;
  }
}

class InsertPoint extends CommandPoint {
  constructor(point, index) {
    super(point);
    this._index = index;
  }

  execute(route) {
    route._points.splice(this._index, 0, this._point);
  }

  unExecute(route) {
    route._points.splice(this._index, 1);
  }
}

class DeletePoint extends CommandPoint {
  constructor(point, index) {
    super(point);
    this._index = index;
  }

  execute(route) {
    route._points.splice(this._index, 1);
  }

  unExecute(route) {
    route._points.splice(this._index, 0, this._point);
  }
}

class ChangePoint extends CommandPoint {
  constructor(point, index, oldPoint) {
    super(point);
    this._index = index;
    this._oldPoint = oldPoint;
  }

  execute(route) {
    route._points.splice(this._index, 1);
    route._points.splice(this._index, 0, this._point);
  }

  unExecute(route) {
    route._points.splice(this._index, 1);
    route._points.splice(this._index, 0, this._oldPoint);
  }
}

export {InsertPoint, DeletePoint, ChangePoint};
