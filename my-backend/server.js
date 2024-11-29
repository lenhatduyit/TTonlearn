const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Xử lý JSON từ body request

// Kết nối cơ sở dữ liệu (dùng connection pool)
const db = mysql.createPool({
    host: 'localhost',
    user: 'root', // User mặc định
    password: '', // Mật khẩu mặc định (rỗng trên XAMPP)
    database: 'dailydictation', // Thay bằng tên database của bạn
});

app.get('/api/topics', (req, res) => {
    const sql = 'SELECT * FROM topics'; // Thay bằng tên bảng của bạn
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Lỗi khi truy vấn:', err.message);
            res.status(500).json({ error: 'Không thể lấy dữ liệu từ cơ sở dữ liệu' });
            return;
        }
        res.json(result);
    });
});

// GET All Exercises
app.get("/api/exercises", (req, res) => {
    const query = "SELECT * FROM exercises";
    db.query(query, (err, results) => {
      if (err) {
        console.error("Error fetching exercises:", err);
        res.status(500).send("Error fetching exercises.");
      } else {
        res.json(results);
      }
    });
  });
  
  // GET Exercises by Topic ID
  app.get("/api/exercises/:topic_id", (req, res) => {
    const topicId = req.params.topic_id;
    const query = "SELECT * FROM exercises WHERE topic_id = ?";
    db.query(query, [topicId], (err, results) => {
      if (err) {
        console.error("Error fetching exercises:", err);
        res.status(500).send("Error fetching exercises.");
      } else {
        res.json(results);
      }
    });
  });

  
app.listen(port, () => {
    console.log(`Server chạy tại http://localhost:${port}`);
});