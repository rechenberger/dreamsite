module.exports = {
  webpack(config, { isServer }) {
    // FROM: https://github.com/piglovesyou/graphql-let#4-configure-webpackconfigts
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

    // FROM: https://github.com/ben-rogerson/twin.examples/tree/master/next-styled-components#add-the-next-config
    if (!isServer) {
      // Unset client-side javascript that only works server-side
      // https://github.com/vercel/next.js/issues/7755#issuecomment-508633125
      config.node = { fs: 'empty', module: 'empty' }
    }

    return config
  },
  images: {
    domains: ['rickandmortyapi.com'],
  },
}
