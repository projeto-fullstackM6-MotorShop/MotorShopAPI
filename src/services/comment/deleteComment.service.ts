import Comment from "../../entities/comment.entity";
import { AppDataSource } from "../../data-source";
import { Repository } from "typeorm";
import { appError } from "../../errors";

const deleteCommentService = async (
  commentId: string,
  userId: string
): Promise<Object> => {
  const commentRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);

  const comment = await commentRepository.findOne({
    where: { id: commentId },
    relations: { user: true },
  });

  if (!comment) {
    throw new appError("Comment does not exist", 404);
  }

  if (comment?.user.id != userId) {
    throw new appError("You can't do that", 403);
  }

  await commentRepository.delete({ id: commentId });

  return {};
};

export default deleteCommentService;
