import { ContentForm } from "..";
import { GenreStrict, Params } from "src/lib/contents/talks";

export type TalkContentForm = ContentForm & GenreStrict & Params;
