const { v4: uuidv4 } = require('uuid');

let db = [
    {
        id: uuidv4(),
        name: "Derek Peters",
        age: 37,
    },
    {
        id: uuidv4(),
        name: "Colin Summers",
        age: 57,
    }
];

const get = () => {
    return db;
};

const getById = (id) => {
    const data = db.find(item => item.id === id);

    return data;
};

const add = (item) => {
    const newItem = {
        id: uuidv4(),
        ...item
    }

    db.push(newItem);

    return newItem;
}

const remove = (id) => {
    const data = db.filter(item => item.id !== id);

    db = data;

    return data;
}

module.exports = { add, get, getById, remove };