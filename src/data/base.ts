export abstract class RepositoryBase<T = any> {
  key: string;
  storage: T | null;

  constructor(key: string) {
    this.key = key;
    this.storage = null;
  }

  load() {
    this.storage = JSON.parse(localStorage.getItem(this.key) || "") as T;
  }
  get() {
    return this.storage;
  }
  set() {
    localStorage.setItem(this.key, JSON.stringify(this.storage));
  }
  add(_?: any) {}
  delete(_?: any) {}
  update() {}
}
