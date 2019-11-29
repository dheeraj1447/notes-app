export class Note {
  private _id: number;
  private _title: string;
  private _notes: string;
  private _updatedOn: string;
  private _enabled: Boolean;

  constructor(id?: number, title?: string, notes?: string, updatedOn?: string, enabled?: Boolean) {
    this._id = id;
    this._title = title;
    this._notes = notes;
    this._updatedOn = updatedOn;
    this._enabled = enabled;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get notes(): string {
    return this._notes;
  }

  set notes(value: string) {
    this._notes = value;
  }

  get updatedOn(): string {
    return this._updatedOn;
  }

  set updatedOn(value: string) {
    this._updatedOn = value;
  }

  get enabled(): Boolean {
    return this._enabled;
  }

  set enabled(value: Boolean) {
    this._enabled = value;
  }
}
