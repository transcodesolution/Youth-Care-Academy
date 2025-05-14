tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#F9423A', // Primary brand color (logo, buttons, highlights)
        red: {
          500: '#F9423A',     // Primary accent (logo, buttons, highlights)
        },
        gray: {
          100: '#F5F5F5',    // Light background surfaces (cards, sections)
          500: '#808080',    // Lighter body/subtext
          600: '#707070',     // Medium gray used in titles, labels, paragraphs
          800: '#4D4D4D',       // Background for header and footer
        },
        green: {
          500: '#5F9287',  // base color 
        },
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          lg: '1280px',
          xl: '1280px',
        },
      },
      boxShadow: {
        card: '0 0 10px 0 rgba(0, 0, 0, 0.1)', // X: 0, Y: 0, Blur: 10, Spread: 0, Color: rgba(0, 0, 0, 0.1)
      },
      fontSize: {
        'xxs': '10px',
        '5xl': '40px'
      },
      borderRadius: {
        'md': '5px',
        'xl': '10px',
        '2xl': '15px',
        '4xl': '30px',
      },
    },
  },
  plugins: [],
}
