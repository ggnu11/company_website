const exporet = require("express");
const router = exporet.Router();
const Post = require("../models/post");
const jwt = require("jsonwebtoken");
const axios = require("axios");

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "토큰이 없습니다." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "유효하지 않은 토큰입니다." });
  }
};

router.post("/", async (req, res) => {
  try {
    const { title, content, filterUrl } = req.body;
    const latestPost = await Post.findOne().sort({ number: -1 });
    const nextNember = latestPost ? latestPost.number + 1 : 1;

    const post = new Post({
      number: nextNember,
      title,
      content,
      filterUrl,
    });

    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: "서버 에러가 발생했습니다." });
  }
});

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "서버 에러가 발생했습니다." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
    }

    // let ip;
    // try {
    //   const response = await axios.get("https://api.ipify.org?format=json");
    //   ip = response.data.ip;
    // } catch (error) {
    //   console.log("IP 주소를 가져오던 중 오류 발생: ", error.message);

    //   ip = req.ip;
    // }

    // const userAgent = req.headers["user-agent"];

    // const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    // const hasRecentView = post.viewLogs.some(
    //   (log) =>
    //     log.ip === ip &&
    //     log.userAgent === userAgent &&
    //     new Date(log.timeStamp) > oneDayAgo
    // );

    // if (!hasRecentView) {
    //   post.views += 1;
    //   post.viewLogs.push({ ip, userAgent, timeStamp: new Date() });
    //   await post.save();
    // }

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "서버 에러가 발생했습니다." });
  }
});

module.exports = router;
