import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutPublishersInput } from './product-update-without-publishers.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutPublishersInput {

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;

    @Field(() => ProductUpdateWithoutPublishersInput, {nullable:false})
    @Type(() => ProductUpdateWithoutPublishersInput)
    data!: ProductUpdateWithoutPublishersInput;
}
