const News = require("../models/News");

// Lấy danh sách news theo serviceId
exports.getNewsByService = async (req, res) => {
  try {
    const { serviceId } = req.params;
    const news = await News.find({ service: serviceId })
      .populate({ path: "admin" })
      .populate({ path: "location" })
      .populate({ path: "service" });
    res.json({
      success: true,
      data: news,
    });
  } catch (err) {
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
