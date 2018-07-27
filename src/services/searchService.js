import {Service} from 'react-services-injector';

class searchService extends Service {

    constructor() {
        super();
        this.searchTerm = 'hello';
    }

    get search() {
        return this.searchTerm;
    }

    setSearch(value) {
        this.searchTerm = value;
    }

}

searchService.publicName = 'searchService';

export default searchService;