'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'ngblog-secret',

  FACEBOOK_ID:      'app-id',
  FACEBOOK_SECRET:  'secret',

  TWITTER_ID:       'app-id',
  TWITTER_SECRET:   'secret',

  GOOGLE_ID: '701392985249-22gefuvvkqb0n7pr2fq7f3d0nd8lk1an.apps.googleusercontent.com',
  GOOGLE_SECRET: 'aY_cVpRpbgLP2Y1dzHPNgqgr',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
