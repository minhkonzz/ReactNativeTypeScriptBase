module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
		[
			'babel-plugin-module-resolver', {
				root: ['./'],
				alias: {
					'@components': './src/components',
					'@screens': './src/screens',
					'@navigators': './src/navigators',
					'@utils': './src/utils',
					'@hooks': './src/hooks',
					'@configs': './src/configs', 
					'@hocs': './src/hocs'
				}
			}
		],
		['react-native-reanimated/plugin'],
		["@babel/plugin-proposal-decorators", { "legacy": true }],
		["module:react-native-dotenv"]
	]
};
