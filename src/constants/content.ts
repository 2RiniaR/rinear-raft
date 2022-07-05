import { createContext } from "react";
import { ContentContextProps } from "types/content";

export const ContentContext = createContext<ContentContextProps>({ genre: "letter" });
