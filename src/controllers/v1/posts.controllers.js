import * as PostsModel from '../../models/posts.model';
//import { HttpException, HttpStatus } from '../errors/HttpException.error';

export const getAll = async (_request, response) => {
  response.json({
    posts: await PostsModel.getAll()
  });
}

export const createPosts = async (_request,response) => {
  const postsData = _request.body;
  const post = await PostsModel.createPosts({
      message: postsData.message,
      createdAt: new Date(),
      updatedAt: new Date(),
      authorId: postsData.authorId
  });
  response.status(201).json(post);
}

export const getById = async(_request, response) => {
const id = _request.params.id;

response.json({
  post: await PostsModel.getById(Number(id))
})

}

export const getByAuthorId = async(_request, response) => {
const id = _request.params.id;

response.json({
  post: await PostsModel.getByAuthorId(id)
})

}

export const updatePosts = async (_request, response) => {
const postsData = _request.body;
const {id} = _request.params;

const posts = await PostsModel.updateById({
  id: Number(id),
  message: postsData.message,
  updatedAt: new Date()
})
response.json({ posts });
}

export const deleteById = async (_request, response) => {
const {id} = _request.params;
if(!Number.isInteger(+id)){
  response.json({error: "ID not provided"})
}else{
 const result = await PostsModel.deleteById(Number(id))
 response.json({})
}
}

