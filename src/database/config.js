const mongoose = require('mongoose');
require('dotenv').config();

const connectDatabase = async () => {
    try {
        const config = await mongoose.connect(process.env.URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexão com o banco de dados estabelecida')
        console.log(`Tabela conectada : ${config.connection.host}`)
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = connectDatabase;
