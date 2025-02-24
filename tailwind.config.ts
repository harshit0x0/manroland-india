import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			primary: '#003B5C',
  			primaryLight: 'var(--primary-light)'
  		},
  		fontSize: {
  			'9xl': '8rem'
  		},
  		padding: {
  			'50': '12.5rem'
  		},
  		transistionDuration: {
  			'1000': '1000ms'
  		},
  		width: {
  			half: '50%',
  			'third': '33.33%',
			'7/8': '87.5%',
  		},
  		animation: {
  			fadeIn: 'fadeIn 1.5s ease-in-out',
  			slideUp: 'slideUp 1.5s ease-in-out'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0 '
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			slideUp: {
  				'0%': {
  					transform: 'translateY(20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
//   plugins: [require("tailwindcss-animate")],
} satisfies Config;
