import { ContentForm } from "..";
import { GenreStrict, Params } from "src/lib/contents/projects";

export type ProjectContentForm = ContentForm & GenreStrict & Params;
