import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>@jusoren/infra</span>,
  project: {
    link: "https://github.com/jusoren/infra",
  },
  docsRepositoryBase: "https://github.com/jusoren/infra/tree/main",
  footer: {
    text: "Brought to you by Jus Oren",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - @jusoren/infra",
    };
  },
};

export default config;
