class SearchCtrl {
    /* @ngInject */
    constructor() {
        this.searchText = '';
    }

    $onChanges(changes) {
        if (changes && changes.search && changes.search.currentValue) {
            this.searchText = changes.search.currentValue;
        }
    }

    onChange() {
        this.onSearch({
            text: this.searchText
        });
    }
}

export default SearchCtrl;
