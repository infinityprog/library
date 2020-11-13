const PassageDao = require('../persistance/dao/PassageDao');

class PassageService {

    constructor() {
        this.passageDao = new PassageDao();
    }

    more() {
        this.passageDao.insert();
    }

    async day(){
        return {
            labels:['8H - 9H', '9H - 10H', '10H - 11H', '11H - 12H', '12H - 13H', '13H - 14H', '14H - 15H', '15H - 16H', '16H - 17H', '17H - 18H'],
            data2:[2, 4, 5, 7, 2, 0, 5, 2, 0, 5]
        }
    }

    week(){
        return {
            labels:['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
            data2:[50, 25, 35, 48, 20, 2, 0]
        }
    }

    month(){
        let now = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
        let lastDay = now.getDate();
        const data2 =[10,15,24,38,54,62,0,14,12];
        const labels = Array.from({length: lastDay}, (_, i) => i + 1);
        return {
            labels,
            data2
        }
    }

    year(){
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
