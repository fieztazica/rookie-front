import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductToCategoryUpdateManyMutationInput } from './product-to-category-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProductToCategoryWhereInput } from './product-to-category-where.input';

@ArgsType()
export class UpdateManyProductToCategoryArgs {

    @Field(() => ProductToCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductToCategoryUpdateManyMutationInput)
    data!: ProductToCategoryUpdateManyMutationInput;

    @Field(() => ProductToCategoryWhereInput, {nullable:true})
    @Type(() => ProductToCategoryWhereInput)
    where?: ProductToCategoryWhereInput;
}
