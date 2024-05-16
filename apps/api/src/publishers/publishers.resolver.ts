import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PublishersService } from './publishers.service';
import { Publisher } from './entities/publisher.entity';
import { CreatePublisherInput } from './dto/create-publisher.input';
import { UpdatePublisherInput } from './dto/update-publisher.input';

@Resolver(() => Publisher)
export class PublishersResolver {
  constructor(private readonly publishersService: PublishersService) {}

  @Mutation(() => Publisher)
  createPublisher(
    @Args('createPublisherInput') createPublisherInput: CreatePublisherInput,
  ) {
    return this.publishersService.create(createPublisherInput);
  }

  @Query(() => [Publisher], { name: 'publishers' })
  findAll() {
    return this.publishersService.findAll();
  }

  @Query(() => Publisher, { name: 'publisher' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.publishersService.findOne(id);
  }

  @Mutation(() => Publisher)
  updatePublisher(
    @Args('updatePublisherInput') updatePublisherInput: UpdatePublisherInput,
  ) {
    return this.publishersService.update(
      updatePublisherInput.id,
      updatePublisherInput,
    );
  }

  @Mutation(() => Publisher)
  removePublisher(@Args('id', { type: () => String }) id: string) {
    return this.publishersService.remove(id);
  }
}
