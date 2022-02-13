const CracoLessPlugin = require('craco-less');
const path = require('path');
module.exports = {
  babel: {
    plugins: [
      // 配置 babel-plugin-import
      ['import',{ libraryName: 'antd', libraryDirectory: 'es', style: 'css' }, 'antd' ],
      ['@babel/plugin-proposal-decorators', { legacy: true }]
    ],
    presets: [
      [
        "@babel/preset-env",
        {
          modules: false, // 对ES6的模块文件不做转化，以便使用tree shaking、sideEffects等
          useBuiltIns: "entry",
          corejs: {
            version: 3, // 使用core-js@3
            proposals: true,
          },
        }
      ]
    ]
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      return webpackConfig;
    },
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // craco 提供的插件
  plugins: [
    // 配置 less
  	{
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // 自定义主题（如果有需要，单独文件定义更好一些）
              '@primary-color': '#1DA57A',
            },
            javascriptEnabled: true,
          },
        },
        cssLoaderOptions: {
          modules: { localIdentName: "[local]_[hash:base64:5]" },
        }
      },
    },
  ]
}
