import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent: any, args: { productId: string }, context: any) => {
      const resutlt = db.products.find(
        (product: any) => product.id === args.productId
      );
      return resutlt;
    },
    categories: () => db.categories,
    category: (parent: any, args: { categoryId: string }, context: any) => {
      const resutlt = db.categories.find(
        (category: any) => category.id === args.categoryId
      );

      return resutlt;
    },
  },
};
