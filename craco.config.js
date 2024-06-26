const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/presentation/components'),
      '@utils': path.resolve(__dirname, 'src/shared/utils'),
      '@hooks': path.resolve(__dirname, 'src/presentation/hooks'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
}
