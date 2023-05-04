/*
  Warnings:

  - You are about to drop the `_ProductToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `sex` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ProductToUser" DROP CONSTRAINT "_ProductToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToUser" DROP CONSTRAINT "_ProductToUser_B_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "sex" TEXT NOT NULL;

-- DropTable
DROP TABLE "_ProductToUser";

-- CreateTable
CREATE TABLE "Brands" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BrandsToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BrandsToProduct_AB_unique" ON "_BrandsToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_BrandsToProduct_B_index" ON "_BrandsToProduct"("B");

-- AddForeignKey
ALTER TABLE "_BrandsToProduct" ADD CONSTRAINT "_BrandsToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Brands"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BrandsToProduct" ADD CONSTRAINT "_BrandsToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
