var ghpages = require("gh-pages");

ghpages.publish("dist", function (err) {
  if (err) {
    console.log("Error while publishing", err);
  } else {
    console.log("Successfully deployed");
  }
});
