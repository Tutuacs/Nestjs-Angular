import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {

  constructor(private readonly prisma: PrismaService) { }

  create(user: CreateUserDto) {
    return this.prisma.user.create({
      data: user,
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {

    await this.exists(id);
    
    return this.prisma.user.findFirst({
      where:{
        id,
      }
    });
  }

  async update(id: number, user: UpdateUserDto) {

    await this.exists(id);

    if(user.acess){
      user.acess = Number(user.acess);
    }

    return this.prisma.user.update({
      data: user,
      where:{
        id,
      }
    });
  }

  async remove(id: number) {

    await this.exists(id);

    return this.prisma.user.delete({
      where:{
        id,
      }
    });
  }


  async exists(id: number){
    if((await this.prisma.user.count({where:{id}}))){}
    else{throw new BadRequestException("Usuário inexistente");}
  }
}
