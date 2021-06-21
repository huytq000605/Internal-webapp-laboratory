'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

function getPublicUserInfoOfContentEntity(contentEntity) {
  const {
    created_by: {
      _id,
      roles,
      password,
      resetPasswordToken,
      __v,
      blocked,
      isActive,
      registrationToken,
      ...createdBy
    },
    updated_by: {
      _id: __id,
      roles: __roles,
      password: __password,
      resetPasswordToken: ___password,
      __v: ___v,
      blocked: ___blocked,
      isActive: __isActive,
      registrationToken: __registrationToken,
      ...updatedBy
    },
  } = contentEntity;
  return { createdBy, updatedBy };
}

module.exports = {
  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.posts.search(ctx.query);
    } else {
      entities = await strapi.services.posts.find(ctx.query);
    }

    return entities.map((entity) => {
      const { createdBy, updatedBy } = getPublicUserInfoOfContentEntity(entity);
      return sanitizeEntity(
        {
          ...entity,
          createdBy,
          updatedBy,
        },
        { model: strapi.models.posts }
      );
    });
  },
  async create(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.posts.create(data, { files });
    } else {
      entity = await strapi.services.posts.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.posts });
  },

  async update(ctx) {
    const { id } = ctx.params;

    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.posts.update({ id }, data, {
        files,
      });
    } else {
      entity = await strapi.services.posts.update({ id }, ctx.request.body);
    }

    return sanitizeEntity(entity, { model: strapi.models.posts });
  },
};
