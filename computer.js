module.exports = {
    // TODO: Create our computer function here
    add: function (a, b) {

        if(a == null)
            throw new Error('"null" is not a valid number [arg 0].');
        if(b == null)
            throw new Error('"null" is not a valid number [arg 1].');
        if(a == "undefined")
            throw new Error('"undefined" is not a valid number [arg 0].');
        if(b == "undefined")
            throw new Error('"undefined" is not a valid number [arg 1].');
        return a + b;
    }
};