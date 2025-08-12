/**
 * @swagger
 * tags:
 *   name: News
 *   description: Quản lý tin tức cưới
 */

/**
 * @swagger
 * /api/news:
 *   get:
 *     summary: Lấy tất cả tin tức
 *     tags: [News]
 *     responses:
 *       200:
 *         description: Danh sách tin tức
 *   post:
 *     summary: Thêm tin tức mới
 *     tags: [News]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/News'
 *     responses:
 *       201:
 *         description: Đã tạo tin tức
 *
 * /api/news/{id}:
 *   get:
 *     summary: Lấy tin tức theo id
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Id của tin tức
 *     responses:
 *       200:
 *         description: Tin tức
 *       404:
 *         description: Không tìm thấy
 *   put:
 *     summary: Cập nhật tin tức
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Id của tin tức
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/News'
 *     responses:
 *       200:
 *         description: Đã cập nhật
 *       404:
 *         description: Không tìm thấy
 *   delete:
 *     summary: Xóa tin tức
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Id của tin tức
 *     responses:
 *       200:
 *         description: Đã xóa
 *       404:
 *         description: Không tìm thấy
 */

const express = require("express");
const router = express.Router();
const newsController = require("../controllers/newsController");

router.get("/", newsController.getAllNews);
router.get("/:id", newsController.getNewsById);
router.post("/", newsController.createNews);
router.put("/:id", newsController.updateNews);
router.delete("/:id", newsController.deleteNews);

module.exports = router;
