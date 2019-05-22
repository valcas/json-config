const JsonConfig = require('../lib/json-config.js').default;
const fs = require('fs');

describe("A suite", function() {
    it("contains spec with an expectation", function() {
      
      var testJSON = JSON.parse((fs.readFileSync('./spec/testfiles/basic.json','utf-8')));
      
      var cfg = new JsonConfig(testJSON);

      expect(cfg.getValue('customer/firstname', 'Jimmy')).toBe('Joe');
      expect(cfg.getValue('customer/invalid', 'Jimmy')).toBe('Jimmy');
      expect(cfg.getValue('', 'Jimmy')).toBe('Jimmy');
      expect(cfg.getValue(null, 'Jimmy')).toBe('Jimmy');

      var value = cfg.getValue('customer', 'Jimmy');
      expect(value.firstname).toBe('Joe');

      value = cfg.getValue('items/code[type=shoes]', 'none found');
      expect(value.length).toBe(2);

      value = cfg.getValue('items/code[type=shoes]/colours/[colour=red]', 5);
      expect(value.length).toBe(1);

    });
});