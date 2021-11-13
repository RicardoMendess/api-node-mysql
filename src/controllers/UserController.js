const connection = require ('../database/connection')

const respondeModel = {
    sucess: false,
    data: [],
    error: []
}

module.exports = {

    async create(req, res) {
        const response = {...respondeModel}

        const { username, password } = req.body;

        const [, affectRows] = await connection.query (`
            INSERT INTO cadatro_ong VALUES (DEFAULT, '${username}', '${password}', NOW(), NOW())
        `)

        response.success = affectRows > 0 

        return res.json(response)
    },

    async login(req, res) {
        const response = {...respondeModel}

        const { username, password } = req.body;

        const [, data] = await connection.query(`
            SELECT * FROM cadastro_ong WHERE username='' AND password=''
        `)

        console.log(data)

        return res.json(response)
    }
}