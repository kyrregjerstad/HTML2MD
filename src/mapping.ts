const mapping: { [key: string]: (element: HTMLElement) => string } = {
  H1: ({ textContent }) => `# ${textContent}`,
  H2: ({ textContent }) => `## ${textContent}`,
  H3: ({ textContent }) => `### ${textContent}`,
  H4: ({ textContent }) => `#### ${textContent}`,
  H5: ({ textContent }) => `##### ${textContent}`,
  H6: ({ textContent }) => `###### ${textContent}`,
  P: ({ textContent }) => textContent ?? "",
  A: (e) => `[${e.textContent}](${e.getAttribute("href")})`,
  IMG: (e) => `![${e.getAttribute("alt")}](${e.getAttribute("src")})`,
  UL: ({ children }) =>
    Array.from(children)
      .map(({ textContent }) => `- ${textContent}`)
      .join("\n"),
  OL: (e) =>
    Array.from(e.children)
      .map((li, index) => `${index + 1}. ${li.textContent}`)
      .join("\n"),
  LI: ({ textContent }) => `- ${textContent}`,
  STRONG: ({ textContent }) => `**${textContent}**`,
  EM: ({ textContent }) => `*${textContent}*`,
};

export default mapping;
