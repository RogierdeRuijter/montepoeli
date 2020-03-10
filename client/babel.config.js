module.exports = function(api) {
  const isTest = api.env('test');
  api.cache(true);
  const presets = [[
    "@babel/preset-env",
    {
      targets: {
        node: "current"
      }
    }
  ],
  "@babel/preset-typescript",
  "@babel/preset-react"];
  return {
    presets,
    plugins: isTest?["require-context-hook"] :[]
  };
};