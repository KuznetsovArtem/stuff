/**
 * Created by askuznetsov on 2/19/2015.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BlogPostSchema = new Schema({
    title: String,
    body: String,
    name: String,
    info: String,
    active: Boolean
});

module.exports = mongoose.model('Blogpost', BlogPostSchema);
