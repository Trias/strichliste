var sinon = require('sinon');

function createRequestMock(options) {
    options = options || {};

    return {
        params: options.params || {},
        body: options.body || {}
    }
}

function createResponseMock() {
    return {
        _end: null,

        end: function(data) {
            this._end = data;
        }
    }
}

function createUserPersistenceMock(options) {
    return {
        loadUsers: sinon.spy(function(callback) {
            callback(options.loadUsers.error, options.loadUsers.result);
        }),
        loadUserById: sinon.spy(function(id, callback) {
            callback(options.loadUserById.error, options.loadUserById.result);
        }),
        loadUserByName: sinon.spy(function(name, callback) {
            callback(options.loadUserByName.error, options.loadUserByName.result);
        })
    };
}

module.exports = {
    createRequestMock: createRequestMock,
    createResponseMock: createResponseMock,
    createUserPersistenceMock: createUserPersistenceMock
};