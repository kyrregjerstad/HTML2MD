import mapping from "./mapping";
import { HTML2MDConfig } from "./types";

export const isElementNode = (node: Node): node is HTMLElement =>
  node.nodeType === Node.ELEMENT_NODE;

type ElementMapping = { [key: string]: (element: HTMLElement) => string };

type ConvertElementToMDFunction = (
  mapping: ElementMapping,
  config?: HTML2MDConfig
) => (element: HTMLElement) => string;

export const convertElementToMD: ConvertElementToMDFunction =
  (mapping, config) => (element) => {
    const { tagName, childNodes } = element;

    if (mapping[tagName]) {
      return mapping[tagName](element);
    }

    return Array.from(childNodes)
      .filter(isElementNode)
      .map(convertElementToMD(mapping, config))
      .join("");
  };

function HTML2MD(html: HTMLElement, config?: HTML2MDConfig): string {
  return Array.from(html.childNodes)
    .filter(isElementNode)
    .map(convertElementToMD(mapping, config))
    .join(config?.blockSeparator || "\n\n");
}

export default HTML2MD;
