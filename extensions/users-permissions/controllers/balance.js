const { sanitizeEntity } = require("strapi-utils");
module.exports = {
  async incrementBal(ctx) {
    const { id } = ctx.params;
    const { balance } = ctx;
    let newBalance;

    const entity = await strapi
      .query("user", "users-permissions")
      .findOne({ id: id });

    console.log(entity);
    console.log(entity.balance);

    if (ctx.request.body.b != null) {
      newBalance = entity.balance += ctx.request.body.b;
    } else {
      newBalance = entity.balance += 0;
    }

    //console.log(sanitized.balance);
    strapi
      .query("user", "users-permissions")
      .update({}, { balance: newBalance });
    return newBalance;
  },
};
