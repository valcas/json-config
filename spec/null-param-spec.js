const JsonConfig = require('../lib/json-config.js').default;
const fs = require('fs');

describe("A suite", function() {
    it("contains spec with an expectation", function() {
      
        var testJSON = JSON.parse((fs.readFileSync('./spec/testfiles/basic.json','utf-8')));
        var cfg = new JsonConfig();

        expect(cfg.getValue('customer/firstname', 'Jimmy')).toBe('Jimmy');

    });
});