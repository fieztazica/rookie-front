export {
  PrismaClient,
  Prisma,
  $Enums,
  Gender as GenderPrisma,
} from '@prisma/client';
export type {
  Author as AuthorPrisma,
  Product as ProductPrisma,
  ProductToAuthor as ProductToAuthorPrisma,
  ProductToCategory as ProductToCategoryPrisma,
  Category as CategoryPrisma,
  Customer as CustomerPrisma,
  Order as OrderPrisma,
  OrderItem as OrderItemPrisma,
  Publisher as PublisherPrisma,
  Feedback as FeedbackPrisma,
  ProductToPublisher as ProductToPublisherPrisma,
} from '@prisma/client'; // Adjust this to export necessary types only
