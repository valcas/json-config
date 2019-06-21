var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", '../../spec/testfiles/basic.json', false ); // false for synchronous request
xmlHttp.send( null );
var testJSON = JSON.parse(xmlHttp.responseText);

describe("Null Tests", function() {
    it("check there's no issues where the json has not been specified", function() {
        
        var cfg = new JsonConfig.JsonConfig();

        expect(cfg.getValue('customer/firstname', 'Jimmy')).toBe('Jimmy');

    });
});