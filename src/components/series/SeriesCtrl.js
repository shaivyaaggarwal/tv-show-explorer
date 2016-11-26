class SeriesCtrl {
    /* @ngInject */
    constructor() {
        this.series = null;
    }

    $onInit() {
        if (this.series) {
            this.seasonRating = this._calculateSeasonRating(this.series.Episodes);
        }
    }

    $onChanges(changes) {
        if (changes && changes.series && changes.series.currentValue) {
            const { Episodes } = changes.series.currentValue;
            this.series = changes.series.currentValue;
            this.seasonRating = this._calculateSeasonRating(Episodes);
            this.seriesStartDate = this._getSeriesStartDate();
        }
    }

    _calculateSeasonRating(episodes) {
        return (episodes.reduce((rating, episode) => (
            rating + parseFloat(episode.imdbRating)
        ), 0) / episodes.length).toFixed(2);
    }

    _getSeriesStartDate() {
        const firstEpisode = this.series.Episodes.filter(episode => episode.Episode === '1')[0];
        if (firstEpisode) {
            return new Date(firstEpisode.Released);
        }
        return null;
    }
}

export default SeriesCtrl;
