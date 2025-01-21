import { Response } from "express";
import { CustomRequest } from "../../server";
import { PostsService } from "../../services/posts.services";

export let deletePostController = async (
  req: CustomRequest,
  resp: Response
) => {
  let post: any = await PostsService.getPostById(req.params.id);
  if (!post) return resp.status(500).send("Given post id does not exist.");

  await PostsService.deletePostById(req.params.id);

  resp.send({ message: "Post has been deleted successfully." });
};