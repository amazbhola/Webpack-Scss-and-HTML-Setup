# Webpack-Scss-and-HTML-Setup
Webpack Scss and HTML Easy Setup
The following libraries will be added by these command -


webpack </br>
webpack-cli </br>
css-loader </br>
node-sass </br>
sass </br>
sass-loader </br>
style-loader </br>
mini-css-extract-plugin
<pre>
npm i webpack webpack-cli css-loader node-sass sass sass-loader style-loader mini-css-extract-plugin --save-dev
</pre>

Webpack Configuration
in webpack.config.json configure auto compilation css and js in dist folder
<pre>
    const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.js',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader,

                    // Translates CSS into CommonJS
                    "css-loader",

                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/main.css',
        })
    ],
    watch: true
};
</pre>
Add webpack also as package.json's script command -
<pre>
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack"
},
</pre>
So, finally package.json will be like this -
<pre>
   {
  "name": "fullstack-scss",
  "version": "0.0.1",
  "description": "Fullstack boilerplate with SCSS",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack"
  },
  "keywords": [
    "scss",
    "fullstack",
    "course"
  ],
  "author": "akash <manirujjamakash@gmail.com>",
  "license": "GPL-2.0",
  "devDependencies": {
    "css-loader": "^6.7.1",
    "mini-css-extract-plugin": "^2.6.0",
    "node-sass": "^7.0.1",
    "sass": "^1.49.9",
    "sass-loader": "^12.6.0",
    "style-loader": "^3.3.1",
    "webpack": "^5.70.0",
    "webpack-cli": "^4.9.2"
  }
}

</pre>
Now runin command -
<pre>
npm start
</pre>
And look at dist/css/main.css -
<pre>
/*!*********************************************************************************************************!*\
  !*** css ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*********************************************************************************************************/
body {
  font-size: 25px;
  background: red;
}

.navbar .btn {
  font-size: 25px;
  padding: 10px;
}
.navbar ul {
  list-style: none;
}
.navbar ul li {
  display: inline-block;
}

</pre>
So, you can use your generated css file in your HTML file - index.html -
<pre>
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scss Learning</title>
    <link rel="stylesheet" href="dist/css/main.css">
</head>

<body>
    <h2>Scss Learning</h2>
</body>

</html>
</pre>
That's it, this is the very simple way to integrate webpack and scss in your HTML project.