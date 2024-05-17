const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings: allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate("reviews")
    .populate("owner"); //using populate to show the data in reviews section coz it primarily shows only the object_id of the review
  res.render("listings/show.ejs", { listing: listing });
};

module.exports.createListing = async (req, res, next) => {
  // let url = req.file.path;
  // let filename = req.file.filename;
  let newListing = req.body.listing;
  const newData = new Listing(newListing);
  newData.owner = req.user._id;
  // newData.image = { url, filename };
  await newData.save();
  req.flash("success", "New listing created!"); //stored as key,value
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing: listing });
};

module.exports.editForm = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing }); //deconstructing the listing object and sending as individual values
  res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
};
