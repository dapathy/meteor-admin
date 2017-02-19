// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by admin.js.
import { name as packageName } from "meteor/tjdfalcon:admin";

// Write your tests here!
// Here is an example.
Tinytest.add('admin - example', function (test) {
  test.equal(packageName, "admin");
});
