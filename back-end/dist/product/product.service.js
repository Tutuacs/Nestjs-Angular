"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProductService = class ProductService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(product) {
        product.price = product.price == null ? null : Number(product.price);
        product.quantity = product.quantity == null ? null : Number(product.quantity);
        return this.prisma.product.create({
            data: product,
        });
    }
    findAll() {
        return this.prisma.product.findMany();
    }
    async findOne(id) {
        await this.exists(id);
        return this.prisma.product.findFirst({
            where: {
                id,
            }
        });
    }
    async update(id, product) {
        await this.exists(id);
        return this.prisma.product.update({
            data: product,
            where: {
                id,
            }
        });
    }
    async remove(id) {
        await this.exists(id);
        return this.prisma.product.delete({
            where: {
                id,
            }
        });
    }
    async findCategory(category) {
        await this.categoryExists(category);
        return this.prisma.product.findMany({
            where: {
                category,
            }
        });
    }
    async findSubCategory(subCategory) {
        await this.subCategoryExists(subCategory);
        return this.prisma.product.findMany({
            where: {
                subCategory,
            }
        });
    }
    async exists(id) {
        if ((await this.prisma.product.count({ where: { id } }))) { }
        else {
            throw new common_1.BadRequestException("Usuário inexistente");
        }
    }
    async categoryExists(category) {
        if (await this.prisma.product.count({ where: { category, } })) { }
        else {
            throw new common_1.BadRequestException("Categoria inexistente");
        }
    }
    async subCategoryExists(subCategory) {
        if (await this.prisma.product.count({ where: { subCategory, } })) { }
        else {
            throw new common_1.BadRequestException("Sub-Categoria inexistente");
        }
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map