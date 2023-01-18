/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {},
      backgroundImage: {
        "logo-light": "url('/assets/logo/logo_light.png')",
        "logo-dark": "url('/assets/logo/logo_dark.png')",
        "logo-gray": "url('/assets/logo/logo_gray.png')",
        // 亮色主题渐变
        "gradient-light":
          "linear-gradient(268.81deg, #120720 6.59%, rgba(9, 196, 255, 0.917528) 25.01%, #2456a2 47.56%, #5e388d 70.89%, #3d235f 87.2%, #000000 100.37%)",
        // 暗色主题渐变
        "gradient-dark":
          "linear-gradient(110.89deg, #FFFFFF 36.19%, rgba(255, 255, 255, 0) 118.02%)",
        // 紫色渐变
        "gradient-purple":
          "linear-gradient(45deg, #8B58B4 -9.78%, #180924 87.02%)",
        "gradient-btn":
          "linear-gradient(268.86deg, #120720 -47%, rgba(9, 196, 255, 0.917528) -7.98%, #2456A2 39.83%, #5E388D 89.26%, #3D235F 123.82%, #000000 151.73%)",
        "gradient-btn-outline":
          "linear-gradient(to right, #fff, #fff), linear-gradient(268.81deg, #120720 6.59%, rgba(9, 196, 255, 0.917528) 25.01%, #2456a2 47.56%, #5e388d 70.89%, #3d235f 87.2%, #000000 100.37%)",
      },
      borderWidth: {
        3: "3px",
      },
      fontFamily: {
        inter: ["Inter"],
        noto: ["Noto Sans"],
      },
      gradientColorStops: {
        // 紫色渐变
        "purple-0": "#8b58b4",
        "purple-1": "#180924",
      },
    },
  },
  plugins: [],
};
