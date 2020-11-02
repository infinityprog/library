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
        return {
            labels:['08H00', '09H00', '10H00', '11H00', '12H00', '13H00', '14H00', '15H00', '16H00', '17H00', '18H00', '19H00', '20H00', '21H00', '22H00'],
            data2:[0, 4, 3, 7, 2, 2, 0, 2, 4, 0, 3, 4, 0, 0, 0]
        }
    }

    async week(){
        return {
            labels:['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
            data2:[28, 25, 35, 48, 20, 2, 0]
        }
    }

    async month(){
        const data2 =[10,15,24,38,54,62,0,14,12];
        const labels = Array.from({length: 31}, (_, i) => i + 1);
        return {
            labels,
            data2
        }
    }

    async year(){
        return {
            labels:['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet','Aout','Septemrbe','Octobre','Novembre','Décembre'],
            data2:[28, 25, 35, 48, 20, 2, 0, 0, 0, 0, 0, 0]
        }
    }

    findAll() {
        return this.passageDao.findAll();
    }
}

module.exports = PassageService;
