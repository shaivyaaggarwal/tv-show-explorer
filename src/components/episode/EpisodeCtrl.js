import Episode from './Episode.model';

class EpisodeCtrl {
    /* @ngInject */
    constructor($http) {
        this._$http = $http;
    }

    $onInit() {
        if (this.episodeId) {
            this.getEpisode(this.episodeId);
        }
    }

    $onChanges(changes) {
        if (changes && changes.episodeId && changes.episodeId.currentValue) {
            this.getEpisode(changes.episodeId.currentValue);
        }
    }

    getEpisode(id) {
        this._getEpisode(id).then(({ data }) => {
            this.episode = new Episode(data);
        }).catch(err => {
            console.error(err);
        })
        .finally(() => {
            this.loading = false;
        });
    }

    _getEpisode(id) {
        this.loading = true;
        return this._$http.get('http://www.omdbapi.com/', {
            params: {
                r: 'json',
                plot: 'short',
                i: id
            }
        });
    }

    hide() {
        this.onHide({
            id: this.episode.id
        });
    }
}

export default EpisodeCtrl;
