import { RepositoryBase } from "./base";
import { CarRepository } from "./car";
import { ExtraRepository } from "./extra";

export class DataLayer {
  repos: { [key: string]: RepositoryBase };
  constructor() {
    this.repos = {
      cars: new CarRepository("cars"),
      extra: new ExtraRepository("extra"),
    };
  }

  load() {
    for (const key in this.repos) {
      this.repos[key].load();
    }
  }

  getCarsRepo() {
    return this.repos["cars"];
  }
  getExtraRepo() {
    return this.repos["extra"];
  }

  getCarsStorage() {
    return this.repos.cars.storage;
  }
  getExtraStorage() {
    return this.repos.extra.storage;
  }
}
