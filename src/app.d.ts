// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { KVNamespace, D1Database } from '@cloudflare/workers-types';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		interface Platform {
			env?: {
				KV?: KVNamespace;
				DB?: D1Database;
			}
		}
	}
}

export {};
