import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToPublisherScalarWhereInput } from './product-to-publisher-scalar-where.input';
import { Type } from 'class-transformer';
import { ProductToPublisherUpdateManyMutationInput } from './product-to-publisher-update-many-mutation.input';

@InputType()
export class ProductToPublisherUpdateManyWithWhereWithoutPublisherInput {

    @Field(() => ProductToPublisherScalarWhereInput, {nullable:false})
    @Type(() => ProductToPublisherScalarWhereInput)
    where!: ProductToPublisherScalarWhereInput;

    @Field(() => ProductToPublisherUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductToPublisherUpdateManyMutationInput)
    data!: ProductToPublisherUpdateManyMutationInput;
}
