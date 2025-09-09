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
          { name: "Not Available", value: 36, color: "#9CA3AF" },
          { name: "Warning", value: 681, color: "#FACC15" },
          { name: "Failed", value: 1689, color: "#EF4444" },
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
      tag: "Total Vulnerabilities",
      data: {
        total: 1470,
        breakdown: [
          { name: "Critical", value: 80, color: "#571a1a" },
          { name: "High", value: 150, color: "#EF4444" },
          { name: "Medium", value: 833, color: "#F59E0B" },
          { name: "Low", value: 450, color: "#FACC15" },
          { name: "Unknown", value: 80, color: "#9CA3AF" },
        ],
      },
    },
    {
      id: 6,
      name: "Image Security Issues",
      type: "bar",
      tag: "Total Images",
      data: {
        total: 2,
        breakdown: [
          { name: "Critical", value: 2, color: "#571a1a" },
          { name: "High", value: 2, color: "#EF4444" },
          { name: "Medium", value: 2, color: "#F59E0B" },
          { name: "Low", value: 1.5, color: "#FACC15" },
          { name: "Unknown", value: 1, color: "#9CA3AF" },
        ],
      },
    },
  ],
};

export default widgetData;
