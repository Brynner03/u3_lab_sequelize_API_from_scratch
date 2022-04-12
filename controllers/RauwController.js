const res = require('express/lib/response')
const { Rauw_Alejandro } = require('../models')

const GetRauw = async (req, res) => {
    try {
        const rauw = await Rauw_Alejandro.findAll()
        res.send(rauw)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetRauw
}