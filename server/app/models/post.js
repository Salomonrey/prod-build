var mongoose = require("mongoose"); 
var mongooseDateFormat = require("mongoose-date-format"); 

const PostSchema = new mongoose.Schema({ 
title: { 
type: String, 
required: true 
}, 
description: { 
type: String, 
required: true 
}, 
body: { 
type: String, 
required: true 
}, 
main_foto: { 
    type: String, 
    required: true 
    }, 
category: { 
type: String, 
required: true 
}, 
subcategory: { 
type: String, 
required: true 
}, 
date: { type: Date, required: true, default: Date.now } 
}); 

PostSchema.plugin(mongooseDateFormat); 
mongoose.model("Post", PostSchema);