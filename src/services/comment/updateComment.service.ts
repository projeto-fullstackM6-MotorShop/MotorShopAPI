import { Repository } from "typeorm";
import { IComment, ICommentRequest } from "../../interfaces/comment";
import Comment from "../../entities/comment.entity";
import { AppDataSource } from "../../data-source";
import { appError } from "../../errors";

const updateCommentService = async (
  body: ICommentRequest,
  commentId: string,
  userId: string
): Promise<IComment> => {
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

  await commentRepository.update(commentId, { ...body });

  const newComment = await commentRepository.findOneBy({ id: commentId });

  return newComment!;
};

export default updateCommentService;
