abstract class Base {
  public get model(): any {
    return {};
  }
}

export abstract class Exterior extends Base {
  constructor() {
    super();
  }
}

export abstract class Interior extends Base {
  constructor() {
    super();
  }
}

export abstract class Summary extends Base {
  constructor() {
    super();
  }
}

export abstract class ObjectBase {
  protected id: string;
  protected summary: Summary;
  protected exterior: Exterior;
  protected interior: Interior;
  constructor(
    id: string,
    summary: Summary,
    exterior: Exterior,
    interior: Interior
  ) {
    this.id = id;
    this.summary = summary;
    this.exterior = exterior;
    this.interior = interior;
  }

  public get model(): any {
    return {
      id: this.id,
      summary: this.summary,
      exterior: this.exterior,
      interior: this.interior,
    };
  }
}

export class CarExterior extends Exterior {
  protected bodyColor: string;
  protected paintType: string;
  protected wheelSize: string;

  constructor(bodyColor: string, paintType: string, wheelSize: string) {
    super();
    this.bodyColor = bodyColor;
    this.paintType = paintType;
    this.wheelSize = wheelSize;
  }

  public get model(): any {
    return {
      bodyColor: this.bodyColor,
      paintType: this.paintType,
      wheelSize: this.wheelSize,
    };
  }
}

export class CarInterior extends Interior {
  protected seats: string;

  constructor(seats: string) {
    super();
    this.seats = seats;
  }

  public get model(): any {
    return {
      seats: this.seats,
    };
  }
}

export class CarSummary extends Summary {
  protected engine: string;
  protected brand: string;
  protected airSuspension: boolean;

  constructor(engine: string, brand: string, airSuspension: boolean) {
    super();
    this.engine = engine;
    this.brand = brand;
    this.airSuspension = airSuspension;
  }

  public get model(): any {
    return {
      engine: this.engine,
      brand: this.brand,
      airSuspension: this.airSuspension,
    };
  }
}

export class CarBase extends ObjectBase {
  constructor(
    id: string,
    summary: CarSummary,
    exterior: CarExterior,
    interior: CarInterior
  ) {
    super(id, summary, exterior, interior);
  }
}

export class Car extends CarBase {
  protected _extra: { [key: string]: string | number } | undefined;

  constructor(
    id: string,
    summary: CarSummary,
    exterior: CarExterior,
    interior: CarInterior
  ) {
    super(id, summary, exterior, interior);
  }

  public get extra(): { [key: string]: string | number } | undefined {
    return this._extra;
  }

  public set extra(value: { [key: string]: string | number } | undefined) {
    this._extra = value;
  }

  public get model(): any {
    return {
      id: this.id,
      summary: this.summary.model,
      exterior: this.exterior.model,
      interior: this.interior.model,
      extra: this._extra,
    };
  }
}
