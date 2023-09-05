// See https://kit.svelte.dev/docs/types#app

import type { P } from "vitest/dist/types-3c7dbfa5";

// for information about these interfaces
declare global {
	type CPost = {
		id: string;
		category: string;
		anonId: string;
		titles: string;
		body: string;
		file: string;
		date: Date;
		commentsCount: number;
	};
}

export {};
