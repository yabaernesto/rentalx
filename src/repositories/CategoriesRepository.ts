import { Category } from './../model/Category';
import { ICreateCategoryDTO } from './ICatergoriesRepository';

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  // criar categoria
  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    });

    this.categories.push(category);
  }

  // listar categorias
  list(): Category[] {
    return this.categories;
  }

  // validando o nome de categoria
  findByName(name: string): Category {
    const category = this.categories.find(category => category.name === name);
    return category;
  }
}

export { CategoriesRepository };
