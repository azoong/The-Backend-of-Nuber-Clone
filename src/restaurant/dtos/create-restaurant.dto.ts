import { ArgsType, Field, InputType } from "@nestjs/graphql";

// @InputType()
// export class CreateRestaurantDto {
//     @Field(type => String)
//     name: string
//     @Field(type => Boolean)
//     isVegan: string
//     @Field(type => String)
//     address: string;
//     @Field(type => String)
//     owerName: string;
// }

@ArgsType() //아규먼트 이름을 적을 필요 X???
export class CreateRestaurantDto {
    @Field(type => String)
    name: string
    @Field(type => Boolean)
    isVegan: string
    @Field(type => String)
    address: string;
    @Field(type => String)
    owerName: string;
}