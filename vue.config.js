const { defineConfig } = require('@vue/cli-service')
module.exports ={
  pwa: {
    name: '님 앱이름',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    workboxOptions: {
      exclude: [/\.map$/, /manifest\.json$/, 'index.html']
    //제외하고 싶은 파일형식  
    }
  }
}, 
defineConfig({
  transpileDependencies: true
})
