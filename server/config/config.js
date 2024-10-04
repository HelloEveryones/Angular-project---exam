require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3000,
        dbURL: 'mongodb://127.0.0.1:27017/forum',
        origin: ['http://localhost:5555', 'http://localhost:4200']
    },
    production: {
        port: process.env.PORT || 3000,
        dbURL: process.env.DB_URL_CREDENTIALS || 'mongodb+srv://ivadkostadinova:PMDySbyUK5zZDh31@cluster0.xo2pu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
        origin: ['https://moviesworldangular.netlify.app'] // Add your Netlify frontend URL here
    }
};

module.exports = config[env];
