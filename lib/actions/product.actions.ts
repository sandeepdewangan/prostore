
import { convertToPlainObject } from "../utils";
import { prisma } from "@/db/prisma";


export async function getLatestProducts() {
    // const prisma = new PrismaClient();
    const data = await prisma.product.findMany({ take: 8, orderBy: { createdAt: 'desc' } });
    return convertToPlainObject(data);
}

// get single product
export async function getProductBySlug(slug: string) {
    return await prisma.product.findFirst({ where: { slug: slug } });
}