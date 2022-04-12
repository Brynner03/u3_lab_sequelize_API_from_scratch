const res = require('express/lib/response')
const { songs } = require('../models')

const GetSongs = async (req, res) => {
    try {
        const music = await songs.findAll()
        res.send(music)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetSongs
}