import {PrismaClient } from "@prisma/client";

export const db = new PrismaClient()

db.snippet.create({
    data:{
        title:' title', 
        code: 'const a = 1;'
    }
})