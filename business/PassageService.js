const PassageDao = require('../persistance/dao/PassageDao');

class PassageService {

    constructor() {
        this.passageDao = new PassageDao();
    }

    async more() {
        return this.passageDao.findNow().then(passage => {
            console.log(passage)

            if (passage === null || passage === undefined) {
                this.passageDao.insert();
                return 1;
            } else {
                this.passageDao.update(++passage.number)
                return passage.number;
            }
        });
    }

    async day(){

        return [28, 25, 35, 48, 20, 2, 0];

    }

    findAll() {
        return this.passageDao.findAll();
    }
}

module.exports = PassageService;
