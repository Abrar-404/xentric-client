module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        lovely: ['Lovelyn', 'sans-serif'],
        serif: ['Noto Serif', 'serif'],
        sans: ['Poppins', 'sans-serif'],
        cursive: ['Satisfy', 'cursive'],
        script: ['Dancing Script', 'cursive'],
        'noto-serif': ['Noto Serif', 'serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        share: ['Share Tech', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        'shadows-into-light': ['Shadows Into Light', 'cursive'],
        tech: ['TECH', 'cursive'],
        vermin: ['VERMIN', 'cursive'],
        'alien-italic': ['ALIEN-ITALIC', 'cursive'],
        alien: ['ALIEN', 'cursive'],
        azonix: ['AZONIX', 'cursive'],
      },
    },
  },
  plugins: [require('daisyui')],
};
