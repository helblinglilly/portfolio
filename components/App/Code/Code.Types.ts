import { LanguageFn } from "highlight.js";

export interface CodeSection {
	code: string;
	filename: string;
	languageName: string;
	languageFn: LanguageFn;
}
