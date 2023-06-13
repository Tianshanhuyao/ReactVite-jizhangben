'use strict';

const Service = require('egg').Service;

class TypeService extends Service {
  async list() {
    const { app } = this;
    try {
      const result = await app.mysql.query('select * from type');
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

module.exports = TypeService;
