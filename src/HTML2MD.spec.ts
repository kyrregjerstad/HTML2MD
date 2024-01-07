import { isElementNode, convertElementToMD } from "./HTML2MD";

import { expect, test, describe, it } from "vitest";

test("isElementNode", () => {
  expect(isElementNode(document.createElement("div"))).toBe(true);
  expect(isElementNode(document.createTextNode("Hello"))).toBe(false);
});

describe("convertElementToMD", () => {
  it("converts an HTMLElement to Markdown", () => {
    const mockMapping = {
      H1: (element: HTMLElement) => `# ${element.textContent}`,
      P: (element: HTMLElement) => element.textContent ?? "",
    };

    const mockElement = document.createElement("div");
    mockElement.innerHTML = "<h1>Test Header</h1><p>Test paragraph.</p>";

    const joinedResult = Array.from(mockElement.childNodes)
      .map((child) => convertElementToMD(mockMapping)(child as HTMLElement))
      .join("\n");

    expect(joinedResult).toBe("# Test Header\nTest paragraph.");
  });
});
