var sizeof = sizeof || {};
sizeof.sizeof = function(object, pretty) {
    var objectList = [];
    var stack = [object];
    var bytes = 0;

    while (stack.length) {
        var value = stack.pop();

        if(typeof value === 'boolean'){
            bytes += 4;
        }else if(typeof value === 'string'){
            bytes += value.length * 2;
        }else if(typeof value === 'number'){
            bytes += 8;
        }else if(typeof value === 'object' && objectList.indexOf( value ) === -1){
            objectList.push(value);
            // if the object is not an array, add the sizes of the keys
            if (Object.prototype.toString.call(value) != '[object Array]'){
                for(var key in value) bytes += 2 * key.length;
            }
            for(var key in value) stack.push(value[key]);
        }
    }
    return pretty ? sizeof.format(bytes) : bytes;
}
sizeof.format = function(bytes){
    if(bytes < 1024) return bytes + "B";
    else if(bytes < 1048576) return(bytes / 1024).toFixed(3) + "K";
    else if(bytes < 1073741824) return(bytes / 1048576).toFixed(3) + "M";
    else return(bytes / 1073741824).toFixed(3) + "G";
}
exports = module.exports = sizeof;