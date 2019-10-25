
module.exports = api => {
  api.cache(false)
  return {
    'presets': [
      [
        '@babel/preset-env',
        {
          'modules': false,
          'targets': {
            'browsers': '> 1%',
            // 'uglify': true,
          },
          'corejs': '3',
          'useBuiltIns': 'usage',
        },
      ],
      '@babel/preset-typescript',
      '@babel/preset-react',
    ],
  }
}