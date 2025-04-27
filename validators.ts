import { z } from "zod";
import { formatCurrency } from "./lib/utils";

export const ProductSchema = z.object({
    name: z.string().min(5, 'Name must be atleast 5 characters'),
    slug: z.string().min(5, 'Slug must be atleast 5 characters'),
    category: z.string().min(3, 'Category must be atleast 3 characters'),
    brand: z.string().min(3, 'Brand must be atleast 3 characters'),
    description: z.string().min(5, 'Description must be atleast 5 characters'),
    stock: z.coerce.number(),
    images: z.array(z.string()).min(1, 'Product must have atleast one image'),
    // numReviews: 
    isFeatured: z.boolean(),
    banner: z.string().nullable(),
    price: z.string().refine((value) => /^\d+(\.\d{2})?$/.test(formatCurrency(Number(value))), 'Price must be exactly two decimal places'),
    // price: z.number(),
});