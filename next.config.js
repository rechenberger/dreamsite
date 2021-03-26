module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(tsx|graphql)$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript', '@babel/preset-react'],
          },
        },
        { loader: 'graphql-let/loader' },
      ],
    })

    return config
  },
}
