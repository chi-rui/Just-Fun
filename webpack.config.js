var config = {
   entry: './main.js',      // 設定最先開始執行檔案，並進行編譯及包裝 
   output: {                // 設定將程式碼編譯後如何在硬碟中儲存
      path:'/',
      filename: 'index.js',
   },
   devServer: {             // 設定伺服器
      inline: true,
      port: 8080
   },
   module: {                // 使用模組的相關設定
      loaders: [                // 載入器的相關設定
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',         // 設定要使用的載入器
            query: {                        // 需要被轉換的語法清單
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}
module.exports = config;    // 模組匯出