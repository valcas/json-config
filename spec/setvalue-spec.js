var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", '../../spec/testfiles/basic.json', false ); // false for synchronous request
xmlHttp.send( null );
var testJSON = JSON.parse(xmlHttp.responseText);

describe("Set Value Tests", function() {

    it("Setting the value of an object", function() {
        
        var cfg = new JsonConfig.JsonConfig(testJSON);

        var newAddress = '11 Wonder Wall Gardens';

        cfg.setValue('customer/address/streetname', newAddress);
        expect(cfg.getValue('customer/address/streetname')).toBe(newAddress);

    });

    it("Initalising an null object", function() {
        
        var cfg = new JsonConfig.JsonConfig();

        var newAddress = '11 Wonder Wall Gardens';

        cfg.setValue('customer/address/streetname', newAddress);
        expect(cfg.getValue('customer/address/streetname')).toBe(newAddress);

    });

});