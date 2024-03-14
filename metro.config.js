const { getDefaultConfig } = require('expo/metro-config');
const { withExpoAtlas } = require('expo-atlas/metro');

const config = getDefaultConfig(__dirname);

module.exports = withExpoAtlas(config);
