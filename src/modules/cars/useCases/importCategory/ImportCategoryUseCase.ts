import fs from 'fs';
import { parse } from 'csv-parse';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    /* a Promise ira ajudar a funcao a guardar com que todos os dados 
      sejam processados antes de carregar a funcao para nao ter atraso de dados
    */
    return new Promise((resolve, reject) => {
      // caminho do arquivo
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];
      
      // responsavel por ler linha por linha do arquivo
      const parseFile = parse();

      // ler pedaco por pedaco
      stream.pipe(parseFile);

      // escutar as alteracoes de cada pedaco
      parseFile.on('data', async (line) => {
        const [name, description] = line;
        categories.push({
          name,
          description
        });
      })
      .on('end', () => {
        resolve(categories);
      })
      .on('error', (error) => {
        reject(error);
      });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    
    categories.map(async (category) => {
      const { name, description } = category;
      
      const existCategory = this.categoriesRepository.findByName(name);

      if (!existCategory) {
        this.categoriesRepository.create({
          name,
          description
        });
      }
    });
  }
}

export { ImportCategoryUseCase };
