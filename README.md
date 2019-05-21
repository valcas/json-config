# json-config
Json Config Parser

Quickly and easily parse Json config values

example...

        var testJSON = {
          invoice_no:5,
          customer:{
              firstname:'Joe',
              lastname:'Bloggs'
          },
          items: [
              {code:1202, type:'shoes', colours:[
                  {colour:'red', stock:2},
                  {colour:'blue', stock:3},
                  {colour:'green', stock:4},
              ]},
              {code:32332, type:'shirt'},
              {code:1203, type:'shoes'},
              {code:3923, type:'socks'},
          ]
      };
      
      // Create the config parser
      var cfg = new JsonConfig(testJSON);

      var value = cfg.getValue('customer/firstname', 'Jimmy');                  // 'Joe'
      value = cfg.getValue('customer/invalid', 'Jimmy');                        // 'Jimmy'
      value = cfg.getValue('', 'Jimmy');                                        // 'Jimmy'
      value = cfg.getValue(null, 'Jimmy');                                      // 'Jimmy'
      value = cfg.getValue('customer', 'Jimmy');                                // customer object
      value = cfg.getValue('items/code[type=shoes]', 'none found');             // 2 element array
      value = cfg.getValue('items/code[type=shoes]/colours/[colour=red]', 5);   // 1 element array