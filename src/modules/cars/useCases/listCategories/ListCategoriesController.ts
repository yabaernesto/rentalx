import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesRepository = container.resolve(ListCategoriesUseCase);

    const all = await listCategoriesRepository.execute();

    return response.json(all);
  }
}

export { ListCategoriesController };
