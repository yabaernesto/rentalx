import { Category } from "../../model/Category";
import { ICategoriesRepository, ICreateCategoryDT0 } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  // Padrao Singleton Patters
  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  /* Padrao Singleton Patters: tem como conceito 
     a criacao de uma instancia de uma classe 
     que vai ser uma instancia global da aplicacao
  */

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDT0): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find(category => category.name === name);
    return category;
  }
}

export { CategoriesRepository };
