const Comment = require("../models/Comment");
const News = require("../models/News");

// Create a new comment for a news
exports.createComment = async (req, res) => {
  try {
    const { newsId } = req.params;
    const { content } = req.body;
    // Lấy tên và email từ req.user
    const { fullName, email, role } = req.user;

    // Check if news exists
    const news = await News.findById(newsId);
    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    const comment = new Comment({
      news: newsId,
      user: {
        name: fullName,
        email: email,
      },
      content,
    });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all comments for a news
exports.getCommentsByNews = async (req, res) => {
  try {
    const { newsId } = req.params;
    const comments = await Comment.find({ news: newsId }).sort({
      createdAt: -1,
    });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a comment
exports.deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { email, role } = req.user;
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    // Chỉ chủ comment hoặc admin mới được xóa
    if (comment.user.email !== email && role !== "admin") {
      return res.status(403).json({ message: "Not authorized" });
    }
    await comment.remove();
    res.json({ message: "Comment deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
