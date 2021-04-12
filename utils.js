const response = (response) => {
    const { data, error } = response;

    const success = !error;
    const requestDateTime = new Date();

    return {
        data,
        error,
        requestDateTime,
        success
    };
};

module.exports = { response }