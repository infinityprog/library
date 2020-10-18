const {Pool} = require('pg')

const connection = new Pool({
    user: 'vonrpuqcohpvka',
    host: 'ec2-54-217-213-79.eu-west-1.compute.amazonaws.com',
    database: 'd6t2oarps6p4t9',
    password: 'b110f124507c935f190508449f84a7cc3a4a29bbd4184ea0b620439d548b3eb1',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})

exports.module = {
    connection
};
