/**
 * Created by ed on 24/03/2018.
 */

'use strict';

export default class {
  constructor() {
    this._points = [];

    this._undoCommands = [];
    this._redoCommands = [];
  }

  get points() {
    return this._points;
  }

  get name() {
    return this._name;
  }

  execute(command) {
    command.execute(this);
    this._undoCommands.push(command);
    this._redoCommands = [];
  }

  undo(level = 1) {
    for (let i = 1; i <= level; i++) {
      if (!this._undoCommands.length) break;
      const command = this._undoCommands.pop();
      command.unExecute(this);
      this._redoCommands.push(command);
    }
  }

  redo(level = 1) {
    for (let i = 1; i <= level; i++) {
      if (!this._redoCommands.length) break;
      const command = this._redoCommands.pop();
      command.execute(this);
      this._undoCommands.push(command);
    }
  }

  serialize(serializer) {
    return new serializer(this).serialize();
  }
}
