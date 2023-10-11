/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        tablet: '640px',
        // => @media (min-width: 640px) { ... }

        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      backgroundImage: {
        'characters-pc': "url('../assets/images/meet_characters_bg.png')",
        'characters-sp':
          "url('../assets/images/mobile/meet_characters_bg_mobile2.png')",
        'page-title': "url('../assets/images/Maskgroup.png')",
        'contactUs-pc': "url('../assets/images/contactUs_bg.png')",
        'trackOrder-pc': "url('../assets/images/trackOrder_bg.png')",
        herobg: "url('../assets/images/herobg.png')",
        'charactersPage-pc':
          "url('../assets/images/Characters/characters_bg.png')",
        'youtube-cover': "url('../assets/images/youtube.png')",
      },
      fontFamily: {
        title: ['Idr-kaet', 'ui-sans-serif', 'sans-serif'],
        btn: ['Idr-kaet', 'ui-sans-serif', 'sans-serif'],
        body: ['Poppins', 'ui-sans-serif', 'sans-serif'],
      },
      fontSize: {
        form: [
          '0.75rem',
          {
            lineHeight: '1.125rem',
            letterSpacing: '-0.01em',
            fontWeight: '500',
          },
        ],
      },
      backgroundColor: {
        btn: '#CE8C3D',
        btnGray: '#B4BBC3',
      },

      content: {
        subtract: "url('../assets/images/Subtract.png')",
        colors: {
          'gradient-start': 'rgba(255, 255, 255, 0.75)',
          'gradient-end': 'rgba(255, 255, 255, 0.6)',
          purple: '#3C1A48',
        },
        linearGradientDirections: {
          'top-left': 'to bottom right',
        },
      },
    },
    plugins: [],
  },
  colors: {
    purple: '#3C1A48',
  },
}
