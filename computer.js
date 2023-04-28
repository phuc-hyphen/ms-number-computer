module.exports = {
    // TODO: Create our computer function here
    add: function (a, b) {
        //should throw error if no argument provided
        if (a == null && b == null)
            throw new Error('Arguments missing.');
        if (a === null)
            throw new Error('"null" is not a valid number [arg 0].');
        if (typeof (a) === "undefined")
            throw new Error('"undefined" is not a valid number [arg 0].');
        if (b === null)
            throw new Error('"null" is not a valid number [arg 1].');
        if (typeof (b) === "undefined")
            throw new Error('"undefined" is not a valid number [arg 1].');

        //  should throw error if the first argument is a String:
        if (typeof a == "string")
            throw new Error('a String is not a valid number [arg 0].');
        //  should throw error if the second argument is a String:
        if (typeof b == "string")
            throw new Error('a String is not a valid number [arg 1].');
        return a + b;
    }
};