const chai = require("./chai");

const app = require("../../src/app");

const request = chai.request(app).keepOpen();

module.exports = request;