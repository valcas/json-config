var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", '../../spec/testfiles/basic.json', false ); // false for synchronous request
xmlHttp.send( null );
var testJSON = JSON.parse(xmlHttp.responseText);

describe("Basic Tests", function() {
    it("basic lookups through hierarchy", function() {
      
      // var testJSON = JSON.parse((fs.readFileSync('./spec/testfiles/basic.json','utf-8')));
      
      var cfg = new JsonConfig.JsonConfig(testJSON);

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