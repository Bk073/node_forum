module.exports = {
    mongo: {
        development: {
            connectionString: process.env.DB_CONNECTION,
        },
        production: {
            connectionString: process.env.DB_PROD_CONNECTION,
        }
    }
};