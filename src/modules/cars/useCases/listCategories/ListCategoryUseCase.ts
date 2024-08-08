import { Category } from "../../model/Category";
import { CategoriesRepository } from "../../repositories/CategoriesRepository";

class ListCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();
    
    return categories;
  }
}

export { ListCategoryUseCase };
