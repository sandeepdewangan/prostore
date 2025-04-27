import { ProductSchema } from "@/validators";
import { z } from "zod";

// these are the fields which donot need to be saved into db.
export type ProductModel = z.infer<typeof ProductSchema> & {
    id: string;
    rating: string;
    createdAt: Date;
}