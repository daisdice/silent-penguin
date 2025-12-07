const CACHE_NAME = 'penguin-party-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './manifest.json',
    // 使用しているCDNライブラリをキャッシュリストに追加
    'https://unpkg.com/react@18/umd/react.development.js',
    'https://unpkg.com/react-dom@18/umd/react-dom.development.js',
    'https://unpkg.com/babel-standalone@6/babel.min.js',
    'https://cdn.tailwindcss.com',
    'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js'
];

// インストール時にキャッシュする
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

// リクエスト時にキャッシュがあればそれを返す
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // キャッシュにあればそれを返す、なければネットワークへ
                return response || fetch(event.request);
            })
    );
});