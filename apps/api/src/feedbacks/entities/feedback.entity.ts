import { ObjectType } from '@nestjs/graphql';
import { Paginated } from 'src/common/graphql/paginated.object';
import { Feedback } from 'src/__generated__/feedback/feedback.model';
export { Feedback };

@ObjectType()
export class PaginatedFeedback extends Paginated(Feedback) {}
