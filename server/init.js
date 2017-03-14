import { check } from "meteor/check";
import { Packages, Shops } from "/lib/collections";
import { Hooks, Reaction } from "/server/api";

function addRolesToVisitors() {
  // Add the about permission to all default roles since it's available to all
  const shop = Shops.findOne(Reaction.getShopId());
  Shops.update(shop._id, {
    $addToSet: { defaultVisitorRole: "about" }
  });
  Shops.update(shop._id, {
    $addToSet: { defaultRole: "about" }
  });
  Shops.update(shop._id, {
    $addToSet: { defaultVisitorRole: "works" }
  });
  Shops.update(shop._id, {
    $addToSet: { defaultRole: "works" }
  });
  Shops.update(shop._id, {
    $addToSet: { defaultVisitorRole: "style" }
  });
  Shops.update(shop._id, {
    $addToSet: { defaultRole: "style" }
  });
  Shops.update(shop._id, {
    $addToSet: { defaultVisitorRole: "featured" }
  });
  Shops.update(shop._id, {
    $addToSet: { defaultRole: "featured" }
  });
  Shops.update(shop._id, {
    $addToSet: { defaultVisitorRole: "faq" }
  });
  Shops.update(shop._id, {
    $addToSet: { defaultRole: "faq" }
  });
  Shops.update(shop._id, {
    $addToSet: { defaultVisitorRole: "contact" }
  });
  Shops.update(shop._id, {
    $addToSet: { defaultRole: "contact" }
  });
  Shops.update(shop._id, {
    $addToSet: { defaultVisitorRole: "rules" }
  });
  Shops.update(shop._id, {
    $addToSet: { defaultRole: "rules" }
  });
  Shops.update(shop._id, {
    $addToSet: { defaultVisitorRole: "terms" }
  });
  Shops.update(shop._id, {
    $addToSet: { defaultRole: "terms" }
  });

}

/**
 * Hook to make additional configuration changes
 */
Hooks.Events.add("afterCoreInit", () => {
  addRolesToVisitors();
});
