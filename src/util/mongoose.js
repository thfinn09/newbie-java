module.exports = {
    mutipleMongooseToObject: function (mongooseArray) {
        return mongooseArray.map(item => item.toObject());
    },

    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
};
