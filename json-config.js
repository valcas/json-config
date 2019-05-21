export default class JsonConfig {

    constructor(json)   {
        this.json = json;
        this.usedefault = {usedefault:true};
    }

    getValue(path, defaultValue)    {

        if ( ! path)    {
            return defaultValue;
        }

        var pathElements = path.split('/');
        var value = this.getItem(this.json, pathElements, defaultValue);
        if ((value == null) || (value == this.usedefault))   {
            value = defaultValue;
        }
        return value;

    }

    getItem(currentNode, pathElements)    {

        if (pathElements && (pathElements.length > 0) && currentNode)    {
            if (pathElements[0].indexOf('[') > -1)  {
                var elements = this.searchItem(currentNode, pathElements[0]);
                if (pathElements.length == 1)   {
                    return elements;
                } else {
                    var tmp = [];
                    elements.map(element => {
                        var ret = this.getItem(element, pathElements.splice(1, pathElements.length));
                        if (ret != null )    {
                            tmp.push(ret);
                        }
                    })
                    return tmp;
                }
            }
            if (pathElements.length == 1)   {
                return currentNode[pathElements[0]];
            } else {
                return this.getItem(currentNode[pathElements[0]], pathElements.splice(1, pathElements.length));
            }
        } else {
            return null;
        }
 
    }

    searchItem(currentNode, searchText) {

        var path = searchText.split('[');
        var search = path[1].substring(0, path[1].length - 1);
        var keyValue = search.split('=');
        var results = [];

        currentNode.map(node => {
            if (node[keyValue[0]] == keyValue[1])   {
                results.push(node);
            }
        });

        return results;

    }

}