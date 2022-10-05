import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthzModule } from './authz/authz.module';

@Module({
  imports: [PostsModule, PrismaModule, UsersModule, AuthzModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
