module.exports = {
    link: 'mongodb://localhost:27017/server', // MongoDB link
    schemas: {
        "accounts": {
            username: String,
            email: String,
            password: String,
            HWID: String,
            ip: String,
            position: String,
            socialClub: String,
        }
    }
}