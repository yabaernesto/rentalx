import fs from 'fs';
import { parse } from 'csv-parse';

class ImportCategoryUseCase {

  execute(file: Express.Multer.File): void {
    // caminho do arquivo
    const stream = fs.createReadStream(file.path);
    
    // respomsavel por ler linha por linha do arquivo
    const parseFile = parse();

    // ler pedado por pedaco
    stream.pipe(parseFile);

    // escutar as alteracoes de cada pedaco
    parseFile.on('data', async (line) => {
      console.log(line);
    });
  }
}

export { ImportCategoryUseCase };
