const PassageDao = require('../persistance/dao/PassageDao');

class PassageService {

    constructor() {
        this.passageDao = new PassageDao();
    }

    more() {
        this.passageDao.insert();
    }

    async day(){
        let data;
        await this.passageDao.findDay()
            .then(value => {
                data = this.calculatePassageForEachHour(value);
                return data;
            })
    }

    week(){
        return {
            labels:['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
            data2:[100, 25, 35, 48, 20, 2, 0]
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

    calculatePassageForEachHour(passages) {
        let hours = Array.from({length: 14}, (_, i) => i + 8);
        let result = {
            hour: null,
            passage: null
        }[hours.length]
        for (let i = 0; i < hours.length; i++) {

            for (const passage in passages) {
                new Date().getHours()
                if (hours[i].getHours() <= passage.dateTime.getHours() && hours[i + 1].getHours() > passage.dateTime.getHours()) {
                    let value = result.map(value => value).filter(value => value.hour === hours[i]).find()
                    if (value) {
                        value.passage++;
                    } else {
                        result.push({hours: hours[i], passage: 1})
                    }
                }
            }
        }

        return result;
    }
}

module.exports = PassageService;
