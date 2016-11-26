import './index.scss';

class HomeCtrl {
    /* @ngInject */
    constructor($http) {
        this._$http = $http;
        this.hiddenEpisodes = [];
        this.search = 'Silicon Valley';
        this.season = 1;

        this.setUp();
    }

    setUp() {
        this.getEpisodes();
    }

    getEpisodes() {
        this._getEpisodes(this).then(({ data }) => {
            this.series = data;
        }).catch(err => {
            this.series = undefined;
        });
    }

    _getEpisodes({ search, season = 1 }) {
        return this._$http.get('http://www.omdbapi.com/', {
            params: {
                type: 'episodes',
                r: 'json',
                t: search,
                Season: season
            }
        });
    }

    hideEpisode(id) {
        if (!this.isHidden(id)) {
            this.hiddenEpisodes.push(id);
        }
    }

    isHidden(id) {
        return this.hiddenEpisodes.indexOf(id) !== -1;
    }

    onSearch(text) {
        this.search = text;
        this.getEpisodes();
    }
}

export default HomeCtrl;
