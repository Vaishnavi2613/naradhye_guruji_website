var express = require("express");
var router = express.Router();

const Booking = require("../models/Booking");
const Client = require("../models/Clientt");
const sendEmail = require("../utils/sendEmail");

/* -------------------- TEST ROUTE -------------------- */
router.get("/", (req, res) => {
  res.json({ message: "Index route working" });
});

/* -------------------- CREATE BOOKING -------------------- */
router.post("/bookings", async (req, res) => {
  try {
    // 1️⃣ Basic validation
    if (!req.body.name || !req.body.email || !req.body.service || !req.body.date) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields",
      });
    }

    // 2️⃣ Save booking
    const booking = await Booking.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      service: req.body.service,
      date: req.body.date,
      address: req.body.address,
      dob: req.body.dob,
      birthdayAbhishek: req.body.birthdayAbhishek,
    });

    // 3️⃣ Save or update client (auto-fill feature)
    await Client.findOneAndUpdate(
      { name: req.body.name },
      {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        dob: req.body.dob,
        birthdayAbhishek: req.body.birthdayAbhishek,
      },
      { upsert: true, new: true }
    );

    // 4️⃣ Send email (SAFE – will never crash booking)
    try {
      await sendEmail(
        req.body.email,
        "Booking Received",
        `Dear ${req.body.name},

Your booking request for ${req.body.service} on ${req.body.date} has been received.

Guruji will personally review and confirm your booking shortly.

Thank you`
      );
    } catch (emailError) {
      console.error("Email sending failed:", emailError.message);
    }

    // 5️⃣ Final success response
    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      booking,
    });
  } catch (error) {
    console.error("Booking error:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error while creating booking",
    });
  }
});

module.exports = router;
