const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const { auth } = require("../middleware/auth");

/**
 * @swagger
 * /news/{newsId}/comments:
 *   post:
 *     summary: Tạo bình luận cho bản tin
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: newsId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của bản tin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 example: "Bài viết rất hay!"
 *     responses:
 *       201:
 *         description: Bình luận đã được tạo
 *       404:
 *         description: Không tìm thấy bản tin
 *       401:
 *         description: Chưa xác thực
 */
router.post("/news/:newsId/comments", auth, commentController.createComment);

/**
 * @swagger
 * /news/{newsId}/comments:
 *   get:
 *     summary: Lấy danh sách bình luận của bản tin
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: newsId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của bản tin
 *     responses:
 *       200:
 *         description: Danh sách bình luận
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   news:
 *                     type: string
 *                   user:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       email:
 *                         type: string
 *                   content:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 */
router.get("/news/:newsId/comments", commentController.getCommentsByNews);

/**
 * @swagger
 * /comments/{commentId}:
 *   delete:
 *     summary: Xóa bình luận
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: commentId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của bình luận
 *     responses:
 *       200:
 *         description: Xóa thành công
 *       403:
 *         description: Không có quyền
 *       404:
 *         description: Không tìm thấy bình luận
 *       401:
 *         description: Chưa xác thực
 */
router.delete("/comments/:commentId", auth, commentController.deleteComment);

module.exports = router;
