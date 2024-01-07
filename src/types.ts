export type HTML2MDConfig = {
  customMapping?: { [key: string]: (element: HTMLElement) => string };
  escapeCharacters?: boolean;
  listStyle?: {
    unorderedBullet?: string;
    orderedStartIndex?: number;
  };
  headingBaseLevel?: number;
  includeLinkAttributes?: boolean;
  imageOptions?: {
    includeAltText?: boolean;
    defaultAltText?: string;
  };
  trimWhitespace?: boolean;
  blockSeparator?: string;
  fallbackBehavior?: "ignore" | "text" | "comment";
  verbose?: boolean;
};
