class Passage {


    constructor(id, dateTime) {
        this._id = id;
        this._dateTime = dateTime;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get dateTime() {
        return this._dateTime;
    }

    set dateTime(value) {
        this._dateTime = value;
    }

    get number() {
        return this._number;
    }

    set number(value) {
        this._number = value;
    }
}

module.exports = Passage
