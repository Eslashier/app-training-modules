import {
    MiddlewareConsumer,
    Module,
    NestModule,
    RequestMethod
} from '@nestjs/common';
import { UsersController } from './controller/users.controller';
import { PrintBodyMiddleware } from './middleware/printBody.middleware';
import { UsersService } from './services/users.service';

@Module({
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(PrintBodyMiddleware)
            .forRoutes(
                { path: 'user', method: RequestMethod.POST },
                { path: 'user/:uuid', method: RequestMethod.PUT }
            );
    }
}
