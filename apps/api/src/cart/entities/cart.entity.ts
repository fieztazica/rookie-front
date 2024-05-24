import { ObjectType, Field, Int } from '@nestjs/graphql';

interface CartItems {
  [key: string]: number;
}

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

  constructor();
  constructor(items: KeyValuePair[]);
  constructor(items: Record<string, number>);
  constructor(items?: Record<string, number> | KeyValuePair[]) {
    if (!items) {
      this.items = [];
    } else if (Array.isArray(items)) {
      this.items = items;
    } else {
      this.items = Object.entries(items).map(([key, value]) => ({
        key,
        value,
      }));
    }
  }

  addItem(key: string, value: number) {
    const existingItem = this.items.find((item) => item.key === key);
    if (existingItem) {
      existingItem.value += value;
    } else {
      this.items.push({ key, value });
    }
  }

  addMultipleItems(items: Record<string, number>) {
    Object.entries(items).forEach(([key, value]) => {
      this.addItem(key, value);
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
}
