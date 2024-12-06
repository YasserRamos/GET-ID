import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { ActivityModule } from './activity/activity.module';

@Module({
  imports: [UserModule, TaskModule, ActivityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
