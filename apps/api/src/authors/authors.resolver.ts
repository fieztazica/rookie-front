import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthorsService } from './authors.service';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { Author, PaginatedAuthor } from './entities/author.entity';
import { PaginationArgs } from 'src/common/graphql/pagination.args';

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(private readonly authorsService: AuthorsService) {}

  @Mutation(() => Author)
  createAuthor(
    @Args('createAuthorInput') createAuthorInput: CreateAuthorInput,
  ): Promise<Author> {
    return this.authorsService.create(createAuthorInput);
  }

  @Query(() => PaginatedAuthor, {
    name: 'authors',
  })
  async findAll(@Args() options: PaginationArgs) {
    return this.authorsService.findAll(options);
  }

  @Query(() => Author, { name: 'author' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Author> {
    return this.authorsService.findOne(id);
  }

  @Mutation(() => Author)
  updateAuthor(
    @Args('updateAuthorInput') updateAuthorInput: UpdateAuthorInput,
  ): Promise<Author> {
    return this.authorsService.update(updateAuthorInput.id, updateAuthorInput);
  }

  @Mutation(() => Author)
  removeAuthor(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Author> {
    return this.authorsService.remove(id);
  }
}
