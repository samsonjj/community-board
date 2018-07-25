import locations from '../stubs/locations';

var Locations = {
    locations: locations,
    getLocations: function() {
        return this.locations;
    },
    addLocation: function(location) {
        this.locations.push(location);
    }
}

export default Locations;