import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Restaurant } from "./entities/restaurant.entity";
import { CreateRestaurantDto } from "./dtos/create-restaurant.dto";

// @Resolver()
// export class RestaurantResolver {
//     @Query(() => Boolean)
//     isPizzaGood():Boolean {
//         return true;
//     }
// }

// @Resolver()
// export class RestaurantResolver {
//     @Query(returns => Restaurant)
//     myRestaurant() {
//         return Restaurant;
//     }
// }

@Resolver()
export class RestaurantResolver {
    @Query(returns => [Restaurant]) //그래프큐엘에 Restaurant[] 표시방법
    Restaurant(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
        console.log(veganOnly)
        return []
    }

    @Mutation(returns => Boolean)
    createRestaurant(
        // @Args('name') name:string,
        // @Args('isVegan') isVegan:string,
        // @Args('address') address:string,
        // @Args('owerName') owerName:string,
        @Args() CreateRestaurantDto: CreateRestaurantDto, 
    ){
        console.log(CreateRestaurantDto)
        return true
    }
}