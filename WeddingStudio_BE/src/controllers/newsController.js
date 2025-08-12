const News = require("../models/News");

const mongoose = require("mongoose");
// Lấy danh sách news theo serviceId (hoặc service=null nếu không truyền serviceId)
exports.getNewsByService = async (req, res) => {
  try {
    const { serviceId } = req.params;
    let query = {};
    if (serviceId === undefined || serviceId === null || serviceId === "null") {
      query.service = null;
    } else {
      if (!mongoose.Types.ObjectId.isValid(serviceId)) {
        return res.status(400).json({ message: "Invalid serviceId" });
      }
      query.service = serviceId;
    }
    const news = await News.find(query)
      .populate({ path: "admin" })
      .populate({ path: "location" })
      .populate({ path: "service" });
    res.json({
      success: true,
      data: news,
    });
  } catch (err) {z
    res.status(500).json({ message: err.message });
  }
};

// Lấy tất cả tin tức
exports.getAllNews = async (req, res) => {
  try {
    const news = await News.find().populate("admin location service");
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy tin tức theo id
exports.getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id).populate(
      "admin location service"
    );
    if (!news) return res.status(404).json({ message: "Not found" });
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Thêm tin tức mới
exports.createNews = async (req, res) => {
  try {
    const news = new News(req.body);
    await news.save();
    res.status(201).json(news);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Cập nhật tin tức
exports.updateNews = async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!news) return res.status(404).json({ message: "Not found" });
    res.json(news);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Xóa tin tức
exports.deleteNews = async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);
    if (!news) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
