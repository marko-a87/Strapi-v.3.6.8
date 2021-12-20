const { parseMultipartData } = require("strapi-utils");

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    const { username, balance, highScore, lives } = ctx;
    let entity;

    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi
        .query("user", "users-permissions")
        .create(data, { files });
    } else {
      entity = await strapi
        .query("user", "users-permissions")
        .create(ctx.request.body);
    }

    return {
      username: entity.username,
      balance: entity.balance,
      highScore: entity.highScore,
      lives: entity.lives,
    };
  },
};
