const widgetData = {
  "CSPM Executive Dashboard": [
    {
      id: 1,
      name: "Cloud Accounts",
      type: "donut",
      data: {
        total: 2,
        breakdown: [
          { name: "Connected", value: 2, color: "#3B82F6" },
          { name: "Not Connected", value: 2, color: "#93C5FD" },
        ],
      },
    },
    {
      id: 2,
      name: "Cloud Account Risk Assessment",
      type: "donut",
      data: {
        total: 9659,
        breakdown: [
          { name: "Failed", value: 1689, color: "#EF4444" },
          { name: "Warning", value: 681, color: "#FACC15" },
          { name: "Not Available", value: 36, color: "#9CA3AF" },
          { name: "Passed", value: 7253, color: "#22C55E" },
        ],
      },
    },
  ],
  "CWPP Dashboard": [
    {
      id: 3,
      name: "Top 5 Namespace Specific Alerts",
      type: "empty",
      data: { message: "No Graph data available!" },
    },
    {
      id: 4,
      name: "Workload Alerts",
      type: "empty",
      data: { message: "No Graph data available!" },
    },
  ],
  "Registry Scan": [
    {
      id: 5,
      name: "Image Risk Assessment",
      type: "bar",
      data: {
        total: 1470,
        breakdown: [
          { name: "Critical", value: 9, color: "#B91C1C" },
          { name: "High", value: 150, color: "#EF4444" },
          { name: "Medium", value: 478, color: "#F59E0B" },
          { name: "Low", value: 833, color: "#FACC15" },
        ],
      },
    },
    {
      id: 6,
      name: "Image Security Issues",
      type: "bar",
      data: {
        total: 2,
        breakdown: [
          { name: "Critical", value: 2, color: "#B91C1C" },
          { name: "High", value: 2, color: "#EF4444" },
        ],
      },
    },
  ],
};

export default widgetData;
