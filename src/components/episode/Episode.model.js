class Episode {
    constructor(data) {
        this._initProps(data);
    }

    _initProps(data) {
        Object.keys(data).forEach(prop => {
            this[prop] = data[prop];
        });
    }

    get id() {
        return this.imdbID;
    }

    get rating() {
        return parseFloat(this.imdbRating).toFixed(2);
    }

    get isHighlyRated() {
        return this.rating > 8.5;
    }

    get releaseDate() {
        return new Date(this.Released);
    }
}

export default Episode;
