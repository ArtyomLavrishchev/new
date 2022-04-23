import path from 'path';

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components' ),
      '@assets': path.resolve(__dirname, 'src/assets' ),
    },
  },
};
