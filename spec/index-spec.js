var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", '../../spec/testfiles/basic.json', false ); // false for synchronous request
xmlHttp.send( null );
var testJSON = JSON.parse(xmlHttp.responseText);

describe("Index Tests", function() {
  it("Search and get indexes in hierarchy", function() {
          
      var cfg = new JsonConfig.JsonConfig(testJSON);

      let indexes = cfg.getIndex(testJSON.items, 'items/code[type=shoes]');
      console.log('indexes:' + JSON.stringify(indexes));
      expect(indexes[0].index).toBe(0);
      expect(indexes[1].index).toBe(2);
      
    });
});