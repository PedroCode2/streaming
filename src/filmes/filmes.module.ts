import { Module } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { FilmesController } from './filmes.controller';

@Module({
  providers: [FilmesService],
  controllers: [FilmesController]
})
export class FilmesModule {}
