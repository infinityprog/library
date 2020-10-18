const {connection} = require("../../db/connection").module;

class PassageDao {

    /**
     * <h1>Find data of the day<h1>
     *
     * @returns {Promise<Passage>}
     */
    async findNow() {
        return new Promise(resolve => {
            connection.query('SELECT * FROM passage where day = $1', [new Date().toLocaleDateString()], (error, result) => {
                if (error) {
                    console.log(error)
                    throw error
                }

                if (result.rows.length !== 0) {
                    resolve(result.rows[0]);
                }

                resolve(null);
            })
        })
    }

    /**
     * <h1>Insert data today<h1>
     */
    insert() {
        connection.query('insert into passage (day, number) values ($1, $2)', [new Date().toLocaleDateString(), 1]);
    }

    /**
     * <h1>update data today with number<h1>
     */
    update(number) {
        connection.query('update passage set number = $1 where day = $2', [number, new Date().toLocaleDateString()])
    }

    /**
     * <h1>Find all passage<h1>
     */
    findAll() {
        return new Promise(resolve => {
            connection.query('SELECT * FROM passage', (error, result) => {
                if (error) {
                    console.log(error)
                    throw error
                }

                if (result.rows.length !== 0) {
                    resolve(result.rows[0]);
                }

                resolve(null);
            })
        })
    }
}

module.exports = PassageDao
