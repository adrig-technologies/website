module.exports = {
  pageExtensions: ['tsx'],
  webpack: (config) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: 'json',
          use: 'yaml-loader',
        },
        {
          test: /\.svg$/,
          use: '@svgr/webpack',
        },
      ]
    );
    return config;
  },
  images: {
    loader: 'akamai',
    path: '/',
  },
};
