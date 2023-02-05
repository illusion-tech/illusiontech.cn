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
          "linear-gradient(268.86deg, rgba(9, 196, 255, 0.9) -7.98%, #2456A2 39.83%, #5E388D 89.26%, #3D235F 123.82%)",
        "gradient-btn-outline":
          "linear-gradient(268.86deg, #120720 0.99%, rgba(9, 196, 255, 0.9) 20.51%, #2456A2 44.43%, #B073FF 64.36%, #3D235F 85.15%, #000 100.41%)",
        "gradient-btn-outline-hover":
          "linear-gradient(var(--rotate), rgba(9, 196, 255, 0.9) -5.58%, #2456A2 36.65%, #B073FF 71.85%, #3D235F 108.55%)",
        "gradient-btn-outline-focus":
          "linear-gradient(100.69deg, rgba(154, 249, 255, 0.21) 17.93%, rgba(114, 71, 235, 0.2058) 92.33%)",
        // 亮色圆点背景
        "dot-light":
          "radial-gradient(rgba(0, 0, 0, 0.3) 20%, transparent 0.5rem)",
        // 暗色圆点背景
        "dot-dark":
          "radial-gradient(rgba(255, 255, 255, 0.3) 20%, transparent 0.5rem)",
      },
      borderWidth: {
        3: "3px",
      },
      fontFamily: {
        inter: ["Inter"],
        noto: ["Noto Sans"],
      },
      keyframes: {
        "bg-translateX": {
          "0%": { "background-position": "100% 0" },
          "100%": { "background-position": "0 0" },
        },
        "bg-translateX-delay": {
          "0%,50%": { "background-position": "150% 0" },
          "75%": { "background-position": "75% 0" },
          "100%": { "background-position": "0 0" },
        },
        rotate: {
          "0%": { "--rotate": "0deg" },
          "100%": { "--rotate": "360deg" },
        },
      },
      animation: {
        // 背景流动动画
        "bg-translateX": "bg-translateX 2s linear infinite alternate",
        "bg-translateX-delay": "bg-translateX-delay 3s linear infinite",
        // 背景旋转动画
        "bg-rotate": "rotate 4s linear infinite",
      },
    },
  },
  plugins: [],
};
