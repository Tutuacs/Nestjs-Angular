import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [UserModule, ProductModule,PrismaModule,ConfigModule.forRoot()],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {

}
