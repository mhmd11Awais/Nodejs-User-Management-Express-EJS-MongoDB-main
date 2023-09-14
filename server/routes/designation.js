const express = require("express");
const router = express.Router();
const desig = require("../models/designation");
// const desig = require("../models/designation");
const customer = require("../models/Customer");
const mongoose = require("mongoose");
const types = require("mongoose").types;
const { BSON, EJSON, ObjectId } = require("bson");

router.post("/addDesignation", async function (req, res) {
  const {
    designationName,
    department,
    salaryrange,
    experience,
    education,
    skills,
    email,
  } = req.body;
  const designation = await desig.create({
    designationName: designationName,
    department: department,
    salaryrange: salaryrange,
    experience: experience,
    education: education,
    skills: skills,
  });
  let ObjId = new mongoose.Types.ObjectId(designation.id);
  await customer.updateOne(
    {
      email: email,
    },
    {
      $push: {
        designation: ObjId,
      },
    },
    { upsert: false, new: true }
  );
  res.send("designation added");
});
module.exports = router;
