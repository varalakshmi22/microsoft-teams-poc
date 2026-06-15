const express = require("express");
const { getProfile, getEvents, getEmails } = require("../services/graph.services");



const router = express.Router();

router.post("/profile", getProfile);

router.post("/events", getEvents);

router.post("/emails", getEmails);

router.get("/health", (req, res) => {
  res.json({ status: "ok" });
})
module.exports = router;