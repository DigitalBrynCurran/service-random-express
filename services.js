const db = require('./db');

const get = () => {
    return db.get();
};

const getById = (id) => {
    if (!id) return;

    const data = db.getById(id);

    return data;
};

const add = (item) => {
    if (!item || item === {}) return;
    const { name } = item;

    if (!name) return;

    const newItem = db.add(item);

    return newItem;
}

const remove = (id) => {
    if (!id) return;

    const data = db.remove(id);

    return data;
}

module.exports = { add, get, getById, remove };