import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { FindManyAuthorArgs } from 'src/__generated__/author/find-many-author.args';
import { ProductToAuthor } from 'src/__generated__/product-to-author/product-to-author.model';
import { PrismaService } from 'src/common/database/prisma.service';
import { PaginationArgs } from 'src/common/graphql/pagination.args';
import { AuthorsService } from './authors.service';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { Author, PaginatedAuthor } from './entities/author.entity';

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(
    private readonly authorsService: AuthorsService,
    private readonly prismaService: PrismaService,
  ) {}

  @Mutation(() => Author)
  createAuthor(
    @Args('createAuthorInput') createAuthorInput: CreateAuthorInput,
  ) {
    return this.authorsService.create(createAuthorInput);
  }

  @Query(() => [Author], {
    name: 'authors',
  })
  async findAll(@Args() options: FindManyAuthorArgs) {
    return this.authorsService.findAll(options);
  }

  @Query(() => PaginatedAuthor, {
    name: 'paginatedAuthors',
  })
  async paginatedFindAll(@Args() options: PaginationArgs) {
    return this.authorsService.paginatedFindAll(options);
  }

  @Query(() => Author, { name: 'author' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.authorsService.findOne(id);
  }

  @ResolveField('products', () => [ProductToAuthor])
  async getProducts(@Parent() author: Author) {
    const { id } = author;
    return this.prismaService.productToAuthor.findMany({
      where: {
        authorId: id,
      },
      include: {
        product: true,
      },
    });
  }

  @Mutation(() => Author)
  updateAuthor(
    @Args('updateAuthorInput') updateAuthorInput: UpdateAuthorInput,
  ) {
    return this.authorsService.update(updateAuthorInput.id, updateAuthorInput);
  }

  @Mutation(() => Author)
  removeAuthor(@Args('id', { type: () => String }) id: string) {
    return this.authorsService.remove(id);
  }
}
