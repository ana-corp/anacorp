

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DPl1u3cC.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/index.DiuNv6fT.js"];
export const stylesheets = [];
export const fonts = [];
