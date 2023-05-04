import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {

  constructor(private readonly prisma: PrismaService) { }

  create(product: CreateProductDto) {

    product.price = product.price == null ? null : Number(product.price);
    product.quantity = product.quantity == null ? null : Number(product.quantity);

    return this.prisma.product.create({
      data: product,
    });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  async findOne(id: number) {

    await this.exists(id);

    return this.prisma.product.findFirst({
      where: {
        id,
      }
    });
  }

  async update(id: number, product: UpdateProductDto) {

    await this.exists(id);

    return this.prisma.product.update({
      data: product,
      where: {
        id,
      }
    });
  }

  async remove(id: number) {

    await this.exists(id);

    return this.prisma.product.delete({
      where: {
        id,
      }
    });
  }

  async findCategory(category:string) {

    await this.categoryExists(category)

    return this.prisma.product.findMany({
      where: {
        category,
      }
    });

  }

  async findSubCategory(subCategory:string) {

    await this.subCategoryExists(subCategory)

    return this.prisma.product.findMany({
      where: {
        subCategory,
      }
    });

  }


  async exists(id: number) {
    if ((await this.prisma.product.count({ where: { id } }))) { }
    else { throw new BadRequestException("Usuário inexistente"); }
  }

  async categoryExists(category: string) {

    if (await this.prisma.product.count({where: {category,}})){}
    else{ throw new BadRequestException("Categoria inexistente");}
  }

  async subCategoryExists(subCategory: string) {

    if (await this.prisma.product.count({where: {subCategory,}})){}
    else{ throw new BadRequestException("Sub-Categoria inexistente");}
  }


}
