import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutAuthorsInput } from './product-update-without-authors.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutAuthorsInput } from './product-create-without-authors.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutAuthorsInput {

    @Field(() => ProductUpdateWithoutAuthorsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutAuthorsInput)
    update!: ProductUpdateWithoutAuthorsInput;

    @Field(() => ProductCreateWithoutAuthorsInput, {nullable:false})
    @Type(() => ProductCreateWithoutAuthorsInput)
    create!: ProductCreateWithoutAuthorsInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;
}
