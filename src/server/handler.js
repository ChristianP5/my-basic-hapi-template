const getRootHandler = (request, h) => {
    const response = h.response({
        status: 'success',
        message: 'Welcome to Root!',
    })

    response.code(200);

    return response;
}

const getLostHandler = (request, h) => {
    const response = h.response({
        status: 'fail',
        message: 'Welcome to the Service, but you seem to be Lost!',
    })

    response.code(404);

    return response;
}

module.exports = {
    getRootHandler, getLostHandler
}