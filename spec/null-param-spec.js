const JsonConfig = require('../json-config.js').default;
const fs = require('fs');

describe("Null Tests", function() {
    it("check there's no issues where the json has not been specified", function() {
        
        var testJSON = JSON.parse((fs.readFileSync('./spec/testfiles/basic.json','utf-8')));
        var cfg = new JsonConfig();

        expect(cfg.getValue('customer/firstname', 'Jimmy')).toBe('Jimmy');

    });
});