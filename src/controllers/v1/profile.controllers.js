import * as ProfileModel from '../../models/posts.model';
//import { HttpException, HttpStatus } from '../errors/HttpException.error';

export const upsertProfile = async (_request,response) => {
  const profileData = _request.body;
  const {id} = _request.params;
  const profile = await ProfileModel.upsertProfile({
      firstName: profileData.firstName ,
      lastName: profileData.lastName,
      userId: id
  });
  response.status(201).json(profile);
}

export const getById = async(_request, response) => {
const id = _request.params.id;

response.json({
  profile: await ProfileModel.getById(id)
})

}

export const deleteById = async(_request, response) => {
const id = _request.params.id;
const profile = await ProfileModel.deleteById(id)
response.json({});

}

export const updatePosts = async (_request, response) => {
const postsData = _request.body;
const {id} = _request.params;

const posts = await PostsModel.updateById({
  id: id,
  message: postsData.message,
  updatedAt: new Date()
})
response.json({ posts });
}