import express from 'express';
import userController from '../controllers/userController';
import articleController from '../controllers/articleController';
import auth from '../middlewares/auth';

const app = express();

app.get('/', userController.welcome);

app.post('/api/v1/auth/signup', userController.signup);
app.post('/api/v1/auth/login', userController.login);

app.post('/api/v1/createArticle', auth, articleController.createArticle);

export default app;