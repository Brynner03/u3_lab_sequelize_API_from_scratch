const res = require('express/lib/response')
const { Concerts } = require('../models')

const GetConcerts = async (req, res) => {
    try {
        const concert = await Concerts.findAll()
        res.send(concert)
    } catch (error){
        throw error
    }
}

const CreateConcert = async (req, res) => {
    try {
        let concertC = parseInt(req.params.concerts_id)
        let concertBody = {
            concertC, ...req.body
        }
        let create = await Concerts.create(concertBody)
        res.send(create)
    } catch (error) {
        throw error
    }
}

const UpdateConcert = async (req, res) => {
    try {
        let concertId = parseInt(req.params.concerts_id)
        let updatedConcert = await Concerts.update(req.body, {
            where: {id: concertId},
            returning: true
        })
        res.send(updatedConcert)
    } catch (error) {
        throw error
    }
}

const DeleteConcert = async (req, res) => {
    try {
        let concertId = parseInt(req.params.concerts_id)
        await Concerts.destroy({
            where: { id: concertId}
        })
        res.send({ message: `The concert with an id of ${concertId} has been deleted!`})
    } catch (error) {
        throw error
    }
}







module.exports = {
    GetConcerts,
    CreateConcert,
    UpdateConcert,
    DeleteConcert

}