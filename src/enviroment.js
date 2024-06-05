const environment = {
    production: false,
    host:`http://192.168.86.30`,
    port: 8080,
    get URL(){return `${this.host}:${this.port}`}
}
module.exports = environment;