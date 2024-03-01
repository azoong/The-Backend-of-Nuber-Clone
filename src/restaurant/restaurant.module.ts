import { Module } from '@nestjs/common';
import { RestaurantResolver } from './restaurant.resover';

@Module({
    providers:[RestaurantResolver]
})
export class RestaurantModule {}
