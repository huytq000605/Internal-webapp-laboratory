module.exports = {
  definition: `
    type Author {
      id: String!
      firstname: String!
      lastname: String!
      email: String!
    }

   extend type Posts{
      createdBy: Author!
      updatedBy: Author!
    }
  `,
};
