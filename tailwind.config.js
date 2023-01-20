/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "logo-light": "url('/assets/logo/logo_light.png')",
        "logo-dark": "url('/assets/logo/logo_dark.png')",
        "logo-gray": "url('/assets/logo/logo_gray.png')",
        // 亮色主题渐变
        "gradient-light":
          "linear-gradient(269.53deg, #3D235F -2.6%, #591EA5 22%, rgba(9, 196, 255, 0.9) 40.36%, #2456A2 55.71%, #5E388D 78.62%, #380080 100.91%)",
        // 暗色主题渐变
        "gradient-dark":
          "linear-gradient(110.89deg, #fff 0%, #666 40%, #fff 100%)",
        // 紫色渐变
        "gradient-purple":
          "linear-gradient(45deg, #8B58B4 -9.78%, #180924 87.02%)",
        "gradient-btn":
          "linear-gradient(268.86deg, #120720 -47%, rgba(9, 196, 255, 0.9) -7.98%, #2456A2 39.83%, #5E388D 89.26%, #3D235F 123.82%, #000000 151.73%)",
        "gradient-btn-outline":
          "linear-gradient(to right, #fff, #fff), linear-gradient(268.81deg, #120720 6.59%, rgba(9, 196, 255, 0.9) 25.01%, #2456a2 47.56%, #5e388d 70.89%, #3d235f 87.2%, #000000 100.37%)",
      },
      borderWidth: {
        3: "3px",
      },
      fontFamily: {
        inter: ["Inter"],
        noto: ["Noto Sans"],
      },
      keyframes: {
        "bg-position": {
          "0%,50%": { "background-position": "150% 0" },
          "75%": { "background-position": "75% 0" },
          "100%": { "background-position": "0 0" },
        },
      },
      animation: {
        // 背景流动动画
        "bg-flow": "bg-position 3s linear infinite",
      },
    },
  },
  plugins: [],
};
