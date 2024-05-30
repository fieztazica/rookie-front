import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from 'src/__generated__/product/product.model';

@ObjectType()
export class KeyValuePair {
  @Field()
  key: string;

  @Field(() => Int)
  value: number;
}

@ObjectType()
export class Cart {
  @Field(() => [KeyValuePair])
  items: KeyValuePair[];

  @Field(() => [Product], { nullable: true })
  products?: Product[];

  constructor();
  constructor(items: KeyValuePair[]);
  constructor(items: Record<string, number>);
  constructor(items?: Record<string, number> | KeyValuePair[]) {
    if (!items) {
      this.items = [];
    } else if (Array.isArray(items)) {
      this.items = items.map(({ key, value }) => ({
        key,
        value: this.intValue(value),
      }));
    } else {
      this.items = Object.entries(items).map(([key, value]) => ({
        key,
        value: this.intValue(value),
      }));
    }
  }

  addItem(key: string, value: number) {
    const existingItem = this.items.find((item) => item.key === key);
    if (existingItem) {
      existingItem.value = Math.max(1, existingItem.value + Math.trunc(value));
    } else {
      this.items.push({ key, value: this.intValue(value) });
    }
  }

  addMultipleItems(items: Record<string, number>) {
    Object.entries(items).forEach(([key, value]) => {
      this.addItem(key, this.intValue(value));
    });
  }

  removeItem(key: string, value: number) {
    const existingItem = this.items.find((item) => item.key === key);
    if (existingItem) {
      existingItem.value -= value;
      if (existingItem.value <= 0) {
        this.items = this.items.filter((item) => item.key !== key);
      }
    }
  }

  deleteItem(key: string) {
    this.items = this.items.filter((item) => item.key !== key);
  }

  itemsToRecord() {
    return Object.fromEntries(this.items.map((item) => [item.key, item.value]));
  }

  intValue(value: number) {
    return Math.max(1, Math.trunc(value));
  }
}
