module.exports = {
  async update(ctx) {
    const { id } = ctx.params;
    const { username, balance, highScore, lives } = ctx;

    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi
        .query("user", "users-permissions")
        .update({ id }, data, {
          files,
        });
    } else {
      entity = await strapi
        .query("user", "users-permissions")
        .update({ id }, ctx.request.body);
    }

    return {
      username: entity.username,
      balance: entity.balance,
      highScore: entity.highScore,
      lives: entity.lives,
    };
  },
};
