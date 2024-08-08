import { Category } from "../model/Category";

interface ICreateCategoryDT0 {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDT0): void;
  list(): Category[];
  findByName(name: string): Category;
}

export { ICategoriesRepository, ICreateCategoryDT0 };
