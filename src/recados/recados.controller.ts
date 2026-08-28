import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { RecadosService } from './recados.service';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recados: RecadosService) {}
  //encontrar todos os recados
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    return this.recados.findAll();
  }

  //encontra um recado
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.recados.findOne(id);
  }

  @Post()
  create(@Body() createRecadoDto: CreateRecadoDto) {
    return this.recados.create(createRecadoDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() UpdateRecadoDto: UpdateRecadoDto,
  ) {
    return this.recados.update(id, UpdateRecadoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.recados.remove(id);
  }
}
