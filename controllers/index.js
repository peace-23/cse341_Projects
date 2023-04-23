const myNameFunction = (req, res, next) => {
    res.json("Tony Smith");
};

const anotherNameFunction = (req, res, next) => {
    res.json("Grey Robinson");
};

module.exports = { myNameFunction, anotherNameFunction };
