module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["react-app", { flow: false, typescript: true }],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }]
  ]
};
