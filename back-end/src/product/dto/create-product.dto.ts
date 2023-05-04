import { IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString } from "class-validator";

export class CreateProductDto {

    @IsString()
    title: string;

    @IsOptional()
    quantity: number;

    @IsNumberString()
    price: number;

    @IsString()
    category: string;

    @IsString()
    subCategory:string;
    
    @IsString()
    sex: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsString()
    @IsOptional()
    img1: string;

    @IsString()
    @IsOptional()
    img2: string;

}
