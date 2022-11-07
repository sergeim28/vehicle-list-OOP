import { RepositoryBase } from "../base";

export class ExtraRepository extends RepositoryBase<{
  [key: string]: string | number;
}> {
  add(fieldName?: string) {
    if (fieldName === undefined) return;
    const currentExtra = this.storage || {};
    this.storage = {
      ...currentExtra,
      [String(currentExtra).trim()]: fieldName,
    };
    this.set();
  }

  delete(fieldName?: string) {
    if (fieldName === undefined) return;
    const currentExtra = this.storage || {};
    delete currentExtra[fieldName];
    this.storage = { ...currentExtra };
    this.set();
  }
}
