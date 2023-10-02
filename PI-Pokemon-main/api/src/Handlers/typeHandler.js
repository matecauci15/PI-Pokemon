const {getTypes} = require('../Controllers/typesController')

const getTypesHandler = async (req, res) => {
    try {
        const response = await getTypes()
        res.status(200).json(response)
    } catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports = {getTypesHandler};