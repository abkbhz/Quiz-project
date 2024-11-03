const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/authRoutes');
const quizRoutes = require('./src/routes/quizRoutes');

const app = express();
app.use(cors());
app.use(express.json()); // For parsing application/json
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/quizzes', quizRoutes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
