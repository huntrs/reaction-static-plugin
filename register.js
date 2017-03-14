import { Reaction } from "/server/api";

Reaction.registerPackage({
  label: "static",
  name: "static",
  icon: "fa fa-vine",
  autoEnable: true,
  registry: [
    {
      route: "about-us",
      name: "about",
      template: "aboutUs",
      workflow: "coreWorkflow"
    },
    {
      route: "how-it-works",
      name: "works",
      template: "works",
      workflow: "coreWorkflow"
    },
    {
      route: "style-guide",
      name: "style",
      template: "style",
      workflow: "coreWorkflow"
    },
    {
      route: "featured-closet",
      name: "featured",
      template: "featuredCloset",
      workflow: "coreWorkflow"
    },
    {
      route: "rules",
      name: "rules",
      template: "rules",
      workflow: "coreWorkflow"
    },
    {
      route: "terms-of-use",
      name: "terms",
      template: "terms",
      workflow: "coreWorkflow"
    },
    {
      route: "contact",
      name: "contact",
      template: "contact",
      workflow: "coreWorkflow"
    },
    {
      route: "faq",
      name: "faq",
      template: "faq",
      workflow: "coreWorkflow"
    },
  ],
  layout: [{
    layout: "coreLayout",
    workflow: "coreWorkflow",
    collection: "Products",
    theme: "default",
    enabled: true,
    structure: {
      template: "customHomePageTemplate",
      layoutHeader: "customHeader",
      layoutFooter: "footer",
      notFound: "notFound",
      dashboardHeader: "",
      dashboardControls: "dashboardControls",
      dashboardHeaderControls: "",
      adminControlsFooter: "adminControlsFooter"
    }
}]
});
