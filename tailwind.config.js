export default {
    content: [ './index.html', './src/**/*.{js,jsx}' ],
    theme: {
        extend: {
            colors: { ink: { DEFAULT: '#17240a', 700: '#2b3f12' }, brand: { DEFAULT: '#a3e635', 50: '#f7fee7', 100: '#ecfccb', 600: '#65a30d', 700: '#4d7c0f' } },
            fontFamily: { sans: [ '"Schibsted Grotesk"', 'system-ui', 'sans-serif' ], mono: [ 'ui-monospace', 'Menlo', 'monospace' ] }
        }
    }, plugins: []
}