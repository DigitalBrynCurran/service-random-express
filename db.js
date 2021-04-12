const { v4: uuidv4 } = require('uuid');

let db = [
    {
        id: 0,
        name: "Derek Peters",
        age: 37,
    },
    {
        id: 1,
        name: "Colin Summers",
        age: 57,
    }
];

const get = () => {
    return db;
};

const getById = (id) => {
    if (!id) return;

    const data = db.find(item => item.id === Number(id));

    return data;
};

const add = (item) => {
    console.log(item)
    if (!item || item === {}) return;
    const { name } = item;

    if (!name) return;

    const newItem = {
        ...item,
        id: uuidv4()
    }

    db.push(newItem);

    return newItem;
}

const remove = (id) => {
    if (!id) return;

    const data = db.filter(item => item.id !== Number(id));

    db = data;

    return data;
}

module.exports = { add, get, getById, remove };