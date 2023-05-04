import { IsEmail, IsEmpty, IsStrongPassword } from "class-validator";

export class CreateUserDto {

    @IsEmail()
    email: string;

    @IsStrongPassword({
        minUppercase:0,
        minSymbols:0,
        minLowercase:0,
    })
    password: string;

    @IsEmpty()
    acess: number;
    
}
