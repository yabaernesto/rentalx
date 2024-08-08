import { Specification } from "../../model/Specification";
import { ICreateSpecificationsDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specificatios: Specification[];

  constructor() {
    this.specificatios = [];
  }

  create({ name, description }: ICreateSpecificationsDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    });

    this.specificatios.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specificatios.find(specification => {
      return specification.name === name;
    });

    return specification;
  }
}

export { SpecificationsRepository };
