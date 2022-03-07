import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAll = async () => {
   return prisma.post.findMany({})
}


export const createPosts = async({message,createdAt,updatedAt,authorId}) => {
   return prisma.post.create({
      data:{
         message,
         Author:{ 
            connect: {id: authorId},
         },
         createdAt,
         updatedAt
      }
   })

}


export const getById = async(id) => {
   return prisma.post.findUnique({
      where:{
         id: id
      }
   })
}

export const getByAuthorId = async(id) => {
   return prisma.post.findMany({
      where:{
         authorId: id
      }
   })
}

export const updateById = async({id,message,updatedAt}) => {
   return prisma.post.update({
      where: {
        id,
      },
      data: {
        message,
        updatedAt,
      },
    });
}

export const deleteByAuthorId = async (authorId) => {
   return prisma.post.deleteMany({
      where:{
         authorId: authorId
      }
   })
}

export const deleteById = async(id) => {
   return prisma.post.delete({
      where:{
         id: id
      }
   })
}