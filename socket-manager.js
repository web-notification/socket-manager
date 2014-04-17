function SocketManager() {
    this._socketMap = [];
};

SocketManager.prototype = {
    registSocket: function(uniqueId, socket) {
        this._socketMap[uniqueId] = socket;
    },

    getSocket: function(uniqueId) {
        return this._socketMap[uniqueId];
    }
};

exports = module.exports = new SocketManager;