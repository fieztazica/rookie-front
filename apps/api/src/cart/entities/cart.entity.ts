import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class KeyValuePair {
  @Field()
  key: string;

  @Field(() => Int)
  value: number;
}

@ObjectType()
export class CartData {
  @Field(() => [KeyValuePair])
  items: KeyValuePair[];

  constructor(items: Record<string, number> = {}) {
    this.items = Object.entries(items).map(([key, value]) => ({ key, value }));
  }

  addItem(key: string, value: number) {
    const existingItem = this.items.find((item) => item.key === key);
    if (existingItem) {
      existingItem.value += value;
    } else {
      this.items.push({ key, value });
    }
  }
}
