const {findNow, findAll, insert, update} = require('../persistance/dao/PassageDao');

const more = async () => {
    return findNow().then(passage => {
        console.log(passage)

        if (passage === null || passage === undefined) {
            insert();
            return 1;
        } else {
            update(++passage.number)
            return passage.number;
        }
    });
}

const findAllPassage = () => {
    return findAll();
}

module.exports = {
    more,
    findAllPassage
}
