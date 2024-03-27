export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","bootstrap/css/bootstrap.min.css","bootstrap/js/bootstrap.min.js","browserconfig.xml","css/colors/green.css","css/font-awesome/css/font-awesome.css","css/style.css","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","font-awesome/css/font-awesome.css","img/assets/cbp-loading-popup.gif","img/assets/cbp-loading.gif","img/assets/cbp-sprite.png","img/assets/contact-form-loader.gif","img/assets/gridtile.png","img/assets/gridtile_white.png","img/assets/logo.png","img/assets/marker.png","img/assets/mstile-150x150.png","img/assets/rev-loader.GIF","img/assets/timer.png","img/backgrounds/bg-1.jpg","img/backgrounds/bg-2.jpg","img/backgrounds/bg-3.jpg","img/backgrounds/bg-home-fullscreen.jpg","img/backgrounds/bg-shortcodes.jpg","img/backgrounds/bg.jpg","img/backgrounds/slide1.jpg","img/slides/slide1.jpeg","img/slides/slide1.jpg","img/slides/slide1.png","img/slides/slide2.jpeg","img/slides/slide3.jpeg","img/slides/slide4.jpeg","img/struktur/1.png","img/struktur/2.png","img/struktur/3.png","img/struktur/4.png","img/struktur/5.png","img/struktur/team-1.jpg","img/struktur/team-2.jpg","img/struktur/team-3.jpg","img/struktur/team-4.jpg","js/plugins/jquery.min.js","js/scripts.js","manifest.json","mstile-150x150.png","safari-pinned-tab.svg","service-worker.js"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".js":"text/javascript",".xml":"text/xml",".gif":"image/gif",".GIF":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".json":"application/json",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.0YiNnGJY.js","app":"_app/immutable/entry/app.DQkXjnF2.js","imports":["_app/immutable/entry/start.0YiNnGJY.js","_app/immutable/chunks/entry.BtmUyB4K.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/entry/app.DQkXjnF2.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/index.DiuNv6fT.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
