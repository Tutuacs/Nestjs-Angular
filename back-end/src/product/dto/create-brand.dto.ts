import { IsString } from "class-validator";

export class CreateProductBrandDto {

    @IsString()
    title: string;

}
