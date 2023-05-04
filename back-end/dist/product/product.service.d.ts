import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(product: CreateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Product[]>;
    findOne(id: number): Promise<import(".prisma/client").Product>;
    update(id: number, product: UpdateProductDto): Promise<import(".prisma/client").Product>;
    remove(id: number): Promise<import(".prisma/client").Product>;
    findCategory(category: string): Promise<import(".prisma/client").Product[]>;
    findSubCategory(subCategory: string): Promise<import(".prisma/client").Product[]>;
    exists(id: number): Promise<void>;
    categoryExists(category: string): Promise<void>;
    subCategoryExists(subCategory: string): Promise<void>;
}
