
Copy-Item "C:/Users/dev/Documents/GitHub/fps-React/src"  -filter '*.css' "C:/Users/dev/Documents/GitHub/fps-React/lib" -recurse -verbose 

npm install style-loader css-loader sass-loader --save-dev 

webpack.config.cjs:

  module: {
    rules: [
          {
      // test: /\.s[ac]ss$/,
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          // "sass-loader",
      ]
    }
    ]
  }
