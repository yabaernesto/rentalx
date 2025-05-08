import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  categoriesRepository.create({ name, description });

  response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const all = categoriesRepository.list();

  response.json(all);
});

export { categoriesRoutes };
