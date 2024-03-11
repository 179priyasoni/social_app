import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
    },
    colors:{
      primary:{
        
          50 :'#fcf5fb', 
          100: '#faebf6', 
          200: '#f2cbe8', 
          300: '#ebaed8', 
          400: '#de7abb', 
          500: '#ce4896', 
          600: '#ba3c81', 
          700: '#9c2864', 
          800: '#7d1a48', 
          900: '#5c0f2f', 
          950: '#3b061a'
      
      },
      white:"#ffffff",
      black:"#000000"
    }
  },
  plugins: [],
};
export default config;
