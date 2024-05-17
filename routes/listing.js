const express = require("express");
const router = express.Router();
const wrapAsync = require("../utilities/wrapAsync.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const ExpressError = require("../utilities/ExpressError.js");
const Listing = require("../models/listing.js");
const { isLoggedIn } = require("../middleware.js");

const listingController = require("../controllers/listing.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router.get("/", wrapAsync(listingController.index));

router.get("/new", isLoggedIn, listingController.renderNewForm);

router.get("/:id", wrapAsync(listingController.showListing));

router.post(
  "/",
  isLoggedIn,
  //  upload.single("listing[image]"),
  wrapAsync(listingController.createListing)
);

router.get(
  "/:id/edit",
  isLoggedIn,
  wrapAsync(listingController.renderEditForm)
);

router.put("/:id", isLoggedIn, wrapAsync(listingController.editForm));

router.delete("/:id", isLoggedIn, wrapAsync(listingController.deleteListing));

module.exports = router;
