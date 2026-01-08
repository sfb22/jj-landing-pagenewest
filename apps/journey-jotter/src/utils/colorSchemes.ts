export const colorSchemes = {
  blue: {
    name: "Blue",
    gradient:
      "linear-gradient(315deg, rgba(89, 189, 231, 0.6) 0%, rgba(67, 159, 208, 0.6) 100%)",
    action: "#5fc0fe",
    chatBubble: "#cceeff",
    journalHighlight: "#e6f7ff",
  },
  orange: {
    name: "Orange",
    gradient:
      "linear-gradient(315deg, rgba(255, 153, 0, 0.6) 0%, rgba(255, 94, 0, 0.6) 100%)",
    action: "#ff9900",
    chatBubble: "#ffe0b3",
    journalHighlight: "#fff0d9",
  },
  green: {
    name: "Green",
    gradient:
      "linear-gradient(315deg, rgba(76, 175, 80, 0.6) 0%, rgba(56, 142, 60, 0.6) 100%)",
    action: "#4caf50",
    chatBubble: "#c8e6c9",
    journalHighlight: "#e8f5e9",
  },
  purple: {
    name: "Purple",
    gradient:
      "linear-gradient(315deg, rgba(156, 39, 176, 0.6) 0%, rgba(123, 31, 162, 0.6) 100%)",
    action: "#9c27b0",
    chatBubble: "#e1bee7",
    journalHighlight: "#f3e5f5",
  },
  red: {
    name: "Red",
    gradient:
      "linear-gradient(315deg, rgba(244, 67, 54, 0.6) 0%, rgba(211, 47, 47, 0.6) 100%)",
    action: "#f44336",
    chatBubble: "#ffcdd2",
    journalHighlight: "#ffebee",
  },
  teal: {
    name: "Teal",
    gradient:
      "linear-gradient(315deg, rgba(0, 150, 136, 0.6) 0%, rgba(0, 121, 107, 0.6) 100%)",
    action: "#009688",
    chatBubble: "#b2dfdb",
    journalHighlight: "#e0f2f1",
  },
  pink: {
    name: "Pink",
    gradient:
      "linear-gradient(315deg, rgba(233, 30, 99, 0.6) 0%, rgba(194, 24, 91, 0.6) 100%)",
    action: "#e91e63",
    chatBubble: "#f8bbd0",
    journalHighlight: "#fce4ec",
  },
  indigo: {
    name: "Indigo",
    gradient:
      "linear-gradient(315deg, rgba(63, 81, 181, 0.6) 0%, rgba(48, 63, 159, 0.6) 100%)",
    action: "#3f51b5",
    chatBubble: "#c5cae9",
    journalHighlight: "#e8eaf6",
  },
  amber: {
    name: "Amber",
    gradient:
      "linear-gradient(315deg, rgba(255, 193, 7, 0.6) 0%, rgba(255, 160, 0, 0.6) 100%)",
    action: "#ffc107",
    chatBubble: "#ffecb3",
    journalHighlight: "#fff8e1",
  },
  deepPurple: {
    name: "Deep Purple",
    gradient:
      "linear-gradient(315deg, rgba(103, 58, 183, 0.6) 0%, rgba(81, 45, 168, 0.6) 100%)",
    action: "#673ab7",
    chatBubble: "#d1c4e9",
    journalHighlight: "#ede7f6",
  },
  cyan: {
    name: "Cyan",
    gradient:
      "linear-gradient(315deg, rgba(0, 188, 212, 0.6) 0%, rgba(0, 151, 167, 0.6) 100%)",
    action: "#00bcd4",
    chatBubble: "#b2ebf2",
    journalHighlight: "#e0f7fa",
  },
  lightGreen: {
    name: "Light Green",
    gradient:
      "linear-gradient(315deg, rgba(139, 195, 74, 0.6) 0%, rgba(104, 159, 56, 0.6) 100%)",
    action: "#8bc34a",
    chatBubble: "#dcedc8",
    journalHighlight: "#f1f8e9",
  },
};

export type ColorScheme = keyof typeof colorSchemes;
