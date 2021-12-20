const { sanitizeEntity } = require("strapi-utils");
module.exports = {
  async incrementSco(ctx) {
    const { id } = ctx.params;
    const { highScore } = ctx;
    let newScore;
    const entity = await strapi.query("user", 'users-permissions').findOne({
      id: id,
    });

    if (ctx.request.body.s != null) {
      newScore = entity.highScore += ctx.request.body.s;
    } else {
      newScore = entity.highScore += 0;
    }

    strapi.query("user", 'users-permissions').update({}, { highScore: newScore });
    return newScore;
  },
};
