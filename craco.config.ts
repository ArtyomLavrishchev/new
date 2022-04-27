import path from 'path';

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components' ),
      '@assets': path.resolve(__dirname, 'src/assets' ),
      '@pages': path.resolve(__dirname, 'src/pages' ),
      '@hooks': path.resolve(__dirname, 'src/hooks' ),
      '@reducers': path.resolve(__dirname, 'src/redux/reducers' ),
    },
  },
};
