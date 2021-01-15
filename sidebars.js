module.exports = {
  components: [
    "components",
    {
      type: "category",
      label: "Components List",
      items: [
        "components/components__root",
        "components/components__shop_button",
      ],
    },
  ],
  api: ["api"],
  support: [
    "support",
    {
      type: "category",
      label: "Order Terminal",
      items: [
        "support/terminal/create-new-order",
        "support/terminal/find-order",
        "support/terminal/void-order",
        "support/terminal/print-receipt",
        "support/terminal/pin-code",
        "support/terminal/finalize-order",
        "support/terminal/labels",
        "support/terminal/login",
        "support/terminal/modify-order",
        "support/terminal/ui-overview",
        "support/terminal/update-status",
      ],
    },
    {
      type: "category",
      label: "Reports Dashboard",
      items: [
        "support/reports-dashboard/automated-reports",
        "support/reports-dashboard/create-report",
        "support/reports-dashboard/report-jobs",
      ],
    },
    {
      type: "category",
      label: "Commerce Dashboard",
      items: [
        "support/commerce-dashboard/add-product",
        "support/commerce-dashboard/edit-product",
      ],
    },
  ],
};
