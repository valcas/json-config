const JsonConfig = require('../json-config.js').default;
const fs = require('fs');

describe("Index Tests", function() {
  it("Search and get indexes in hierarchy", function() {
    
      var testJSON = JSON.parse((fs.readFileSync('./spec/testfiles/basic.json','utf-8')));
      
      var cfg = new JsonConfig(testJSON);

      let indexes = cfg.getIndex(testJSON.items, 'items/code[type=shoes]');
      console.log('indexes:' + JSON.stringify(indexes));
      expect(indexes[0].index).toBe(0);
      expect(indexes[1].index).toBe(2);
      
    });
});