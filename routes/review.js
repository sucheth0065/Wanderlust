const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utilities/wrapAsync.js");
const ExpressError = require("../utilities/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { isLoggedIn } = require("../middleware.js");

const reviewController = require("../controllers/review.js");

router.post("/", isLoggedIn, wrapAsync(reviewController.createReviews));

router.delete("/:reviewId", wrapAsync(reviewController.deleteReview));

module.exports = router;
