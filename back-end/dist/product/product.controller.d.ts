import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Product[]>;
    findOne(id: number): Promise<import(".prisma/client").Product>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<import(".prisma/client").Product>;
    remove(id: string): Promise<import(".prisma/client").Product>;
    findByCategory(category: string): Promise<import(".prisma/client").Product[]>;
    findBySubCategory(subCategory: string): Promise<import(".prisma/client").Product[]>;
}
