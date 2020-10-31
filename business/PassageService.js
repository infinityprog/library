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

    async week(){
        return {
            labels:['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
            data:[28, 25, 35, 48, 20, 2, 0]
        }
    }

    async month(){
        const data =[10,15];
        const labels = Array.from({length: 31}, (_, i) => i + 1);
        return {
            labels,
            data
        }
    }

    async year(){
        return {
            labels:['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet','Aout','Septemrbe','Octobre','Novembre','Décembre'],
            data:[28, 25, 35, 48, 20, 2, 0, 0, 0, 0, 0, 0]
        }
    }

    findAll() {
        return this.passageDao.findAll();
    }
}

module.exports = PassageService;
