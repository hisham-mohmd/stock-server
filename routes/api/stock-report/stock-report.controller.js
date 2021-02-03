const { uri } = require('../../../config/config');
const stocks = require('./socket.model');
const axios = require('axios');
exports.getSymbolData = async (req, res) => {
    try {
        let symbol = req.params.symbol;
        let data = await stocks.getSymbol({Symbol : symbol});
        res.status(200).send(data)
    } catch (error) {
        return res.json({
            status: false,
            message: error.message
        });
    }
}
