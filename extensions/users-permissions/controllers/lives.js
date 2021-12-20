module.exports = {
  async incrementLives(ctx) {
    const { id } = ctx.params;
    const { lives } = ctx;
    let newLife;
    /*const entity =
        await strapi.services.User.findOne({
          id: id
        }),*/
    const entity = await strapi
      .query("user", "users-permissions")
      .findOne({ id: id });

    console.log(entity);
    console.log(entity.lives);

    if (ctx.request.body.l != null) {
      newLife = entity.lives += ctx.request.body.l;
    } else {
      newLife = entity.lives += 0;
    }

    //console.log(sanitized.balance);
    strapi.query("user", "users-permissions").update({}, { lives: newLife });
    return newLife;
  },
};
