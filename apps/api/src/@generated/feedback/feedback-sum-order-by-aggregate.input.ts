import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class FeedbackSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;
}
