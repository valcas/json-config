"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var JsonConfig =
/*#__PURE__*/
function () {
  function JsonConfig(json) {
    _classCallCheck(this, JsonConfig);

    this.json = json;
    this.usedefault = {
      usedefault: true
    };
  }

  _createClass(JsonConfig, [{
    key: "getIndex",
    value: function getIndex(parent, path) {
      var nodes = this.getValue(path);
      var result = [];
      parent.map(function (item, index) {
        nodes.map(function (node) {
          if (item == node) {
            result.push({
              index: index,
              node: node
            });
          }
        });
      });
      return result;
    }
  }, {
    key: "getValue",
    value: function getValue(path, defaultValue) {
      if (!path || !this.json) {
        return defaultValue;
      }

      var pathElements = path.split('/');
      var value = this.getItem(this.json, pathElements, defaultValue);

      if (value == null || value == this.usedefault) {
        value = defaultValue;
      }

      return value;
    }
  }, {
    key: "getItem",
    value: function getItem(currentNode, pathElements) {
      var _this = this;

      if (pathElements && pathElements.length > 0 && currentNode) {
        if (pathElements[0].indexOf('[') > -1) {
          var elements = this.searchItem(currentNode, pathElements[0]);

          if (pathElements.length == 1) {
            return elements;
          } else {
            var tmp = [];
            elements.map(function (element) {
              var ret = _this.getItem(element, pathElements.splice(1, pathElements.length));

              if (ret != null) {
                tmp.push(ret);
              }
            });
            return tmp;
          }
        }

        if (pathElements.length == 1) {
          return currentNode[pathElements[0]];
        } else {
          return this.getItem(currentNode[pathElements[0]], pathElements.splice(1, pathElements.length));
        }
      } else {
        return null;
      }
    }
  }, {
    key: "searchItem",
    value: function searchItem(currentNode, searchText) {
      var path = searchText.split('[');
      var search = path[1].substring(0, path[1].length - 1);
      var keyValue = search.split('=');
      var results = [];
      currentNode.map(function (node) {
        if (node[keyValue[0]] == keyValue[1]) {
          results.push(node);
        }
      });
      return results;
    }
  }]);

  return JsonConfig;
}();

exports["default"] = JsonConfig;