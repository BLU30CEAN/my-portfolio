const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// 미들웨어
app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15분
  max: 100, // IP당 최대 요청 수
});
app.use(limiter);

app.use(express.json({ limit: "10mb" }));

// 인메모리 저장소 (실제로는 MongoDB 사용 권장)
let contacts = [];
let posts = [];

// 문의 폼 API
app.post("/api/contact", (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "필수 필드가 누락되었습니다.",
      });
    }

    const contact = {
      id: Date.now().toString(),
      name,
      email,
      subject: subject || "",
      message,
      timestamp: new Date().toISOString(),
      status: "new",
    };

    contacts.push(contact);

    // 실제로는 이메일 발송 로직 추가
    console.log("New contact received:", contact);

    res.json({
      success: true,
      message: "문의가 성공적으로 전송되었습니다.",
    });
  } catch (error) {
    console.error("Contact submission error:", error);
    res.status(500).json({
      success: false,
      message: "서버 오류가 발생했습니다.",
    });
  }
});

// 게시판 API
app.get("/api/posts", (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedPosts = posts
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(startIndex, endIndex);

    res.json({
      success: true,
      data: paginatedPosts,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(posts.length / limit),
        totalPosts: posts.length,
      },
    });
  } catch (error) {
    console.error("Get posts error:", error);
    res.status(500).json({
      success: false,
      message: "서버 오류가 발생했습니다.",
    });
  }
});

app.post("/api/posts", (req, res) => {
  try {
    const { title, content, author } = req.body;

    if (!title || !content || !author) {
      return res.status(400).json({
        success: false,
        message: "필수 필드가 누락되었습니다.",
      });
    }

    const post = {
      id: Date.now().toString(),
      title,
      content,
      author,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      views: 0,
      likes: 0,
    };

    posts.push(post);

    res.json({
      success: true,
      message: "게시글이 성공적으로 작성되었습니다.",
      data: post,
    });
  } catch (error) {
    console.error("Create post error:", error);
    res.status(500).json({
      success: false,
      message: "서버 오류가 발생했습니다.",
    });
  }
});

app.get("/api/posts/:id", (req, res) => {
  try {
    const { id } = req.params;
    const post = posts.find((p) => p.id === id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "게시글을 찾을 수 없습니다.",
      });
    }

    // 조회수 증가
    post.views += 1;

    res.json({
      success: true,
      data: post,
    });
  } catch (error) {
    console.error("Get post error:", error);
    res.status(500).json({
      success: false,
      message: "서버 오류가 발생했습니다.",
    });
  }
});

// 관리자 API (실제로는 인증 필요)
app.get("/api/admin/contacts", (req, res) => {
  try {
    res.json({
      success: true,
      data: contacts.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      ),
    });
  } catch (error) {
    console.error("Get contacts error:", error);
    res.status(500).json({
      success: false,
      message: "서버 오류가 발생했습니다.",
    });
  }
});

// 헬스 체크
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
