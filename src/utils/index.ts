export * from "./motionConfig";

export const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noreferrer");
};
