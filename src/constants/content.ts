import { createContext } from "react";

type ContentContextProps = { genre: "letter" | "material" };
export const ContentContext = createContext<ContentContextProps>({ genre: "letter" });
