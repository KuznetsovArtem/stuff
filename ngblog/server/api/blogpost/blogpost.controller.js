/**
 * Created by askuznetsov on 2/19/2015.
 */
/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /bp              ->  index
 * POST    /bp              ->  create
 * GET     /bp/:id          ->  show
 * PUT     /bp/:id          ->  update
 * DELETE  /bp/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Blogpost = require('./blogpost.model');

// Get list of posts
exports.index = function(req, res) {
    Blogpost.find(function (err, posts) {
        if(err) { return handleError(res, err); }
        return res.json(200, posts);
    });
};

// Get a single blogpost
exports.show = function(req, res) {
    Blogpost.findById(req.params.id, function (err, blogpost) {
        if(err) { return handleError(res, err); }
        if(!blogpost) { return res.send(404); }
        return res.json(blogpost);
    });
};

// Creates a new blogpost in the DB.
exports.create = function(req, res) {
    Blogpost.create(req.body, function(err, blogpost) {
        if(err) { return handleError(res, err); }
        return res.json(201, blogpost);
    });
};

// Updates an existing blogpost in the DB.
exports.update = function(req, res) {
    if(req.body._id) { delete req.body._id; }
    Blogpost.findById(req.params.id, function (err, blogpost) {
        if (err) { return handleError(res, err); }
        if(!blogpost) { return res.send(404); }
        var updated = _.merge(blogpost, req.body);
        updated.save(function (err) {
            if (err) { return handleError(res, err); }
            return res.json(200, blogpost);
        });
    });
};

// Deletes a blogpost from the DB.
exports.destroy = function(req, res) {
    Blogpost.findById(req.params.id, function (err, blogpost) {
        if(err) { return handleError(res, err); }
        if(!blogpost) { return res.send(404); }
        blogpost.remove(function(err) {
            if(err) { return handleError(res, err); }
            return res.send(204);
        });
    });
};

function handleError(res, err) {
    return res.send(500, err);
}