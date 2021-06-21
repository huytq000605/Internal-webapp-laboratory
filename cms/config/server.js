module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // url: env('CMS_URL', 'https://dev.admin.mandevices.com'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '313eb4f1b3278d87bcd0f765ea031c62'),
    },
  },
});
