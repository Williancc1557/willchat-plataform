interface Item {
  title: string;
  url: string;
}

interface List {
  title: string;
  items: Item[];
}

export const list: Array<List> = [
  {
    title: "Documentation",
    items: [
      {
        title: "Get Started",
        url: "",
      },
      {
        title: "Documentation",
        url: "",
      },
      {
        title: "Examples",
        url: "",
      },
    ],
  },
  {
    title: "About",
    items: [
      {
        title: "Changelog",
        url: "",
      },
      {
        title: "Roadmap",
        url: "",
      },
    ],
  },
  {
    title: "Helps",
    items: [
      {
        title: "Troubleshooting",
        url: "",
      },
    ],
  },
];
