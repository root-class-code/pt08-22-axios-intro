require('../db')
const axios = require('axios');
const mongoose = require('mongoose');

const BBModel = require('../models/BB.model')

axios.get('https://www.breakingbadapi.com/api/characters')
    .then(async (result) => {
        await BBModel.create(result.data)
        console.log('Data inserted')
    })
    .catch((err) => {
        console.log('Error in axios request', err.response)
    })
    .finally(() => {
        mongoose.connection.close()
    })