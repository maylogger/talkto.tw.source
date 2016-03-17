# Talk to Taiwan Source Project
## 編譯工具

本站原始檔案使用 Fire.app 1.12 作為編譯工具
css 使用 sass
html 使用 slim template language


## 檔案結構

- fonts：放置 typograhpy.com 提供的 webfont 設定檔案

- images：網站使用的所有圖片

- javascripts：網站使用的 Javascript

- json：polis 結果的 json 檔案

- live：live 頁面（轉址用）

- partial：網站頁面的各個 partial 檔案
  - _footer.html.slim：網站 footer partial
  - _header.html.slim：網站 header partial
  - _introduce.html.slim：網站首頁介紹區塊
  - _slider.html.slim：網站首頁節目 slider
  - _team.html.slim：網站 footer 的團隊資訊

- sass：網站使用的 sass 檔案
  - page：網站頁面用的 style
    - _talk.sass：talk 頁面的 style
    - _archive.sass：直播後 archive 頁面的 style
  - partial：網站元件用的 style
    - _block.sass：內容區塊 style
    - _footer.sass：footer style
    - _header.sass：header style
    - _introduce.sass：首頁介紹區塊的 style
    - _live-countdown.sass：直播頁倒數狀態的 style
    - _live.sass：直撥時與直播後影片區塊的 style
    - _pagination.sass：分頁 style
    - _piechart.sass：polis 統整資料中圖表的顏色
    - _program-nav.asss：archive 頁面中影片區可左右切換集數的 style
    - _share-button.sass：分享按鈕的 style
    - _slider.sass：首頁 slider 的 style
    - _team.sass：footer 製作團隊的 style
  - setup：style 基本設定
    - _base.sass：基本文字 style
    - _helper.sass：輔助用 mixin
    - _layout.sass：全站 layout 設定
    - _normalize.scss：網站 reset 用 style
    - _variable.sass：網站通用變數（主要用於顏色）
    - _webfont.sass：typekit webfont 設定
  - _setup.sass：基本設定 import
  - all.sass：所有 sass 檔案 import

- talk：所有節目的單獨頁面
  - talk-archive-template.html.slim：archive 的範例頁面
  - talk-countdown-template.html.slim：直播前倒數的範例頁面
  - talk-end-template.html.slim：直播後尚未 archive 時的範例頁面

- vendor：網站使用的 plugin 資料夾
  - chartist：polis 統計結果 pie 圖使用的 plugin
  - slick：首頁 slider 使用的 plugin
  - jquery.countdown.min.js：倒數計時用的 plugin
  - jquery.waypoint.min.js：archive 頁面 scroll 觸發事件使用的 plugin
  - macho.js：處理大標題換行掉字的 plugin
  - moment-timezone.js & moment.js：處理倒數計時遇到不同時區問題的 plugin

- _layout.html.slim：全站共用 layout
- _layout_foot.html.slim：放置 js 載入內容
- _layout_google_analytics.erb：GA 設定
- _layout_head.html.slim：頁面 head 內容
- _layout_livereload.html.slim：fire.app 開發用 livereload 功能
- _layout_og.html.slim：fb og 設定
- _layout_siteinfo.html.slim：頁面基本 meta 設定
- CNAME
- config.rb：fire.app 設定
- data.yml：頁面 meta 內容
- index.html.slim：網站首頁
- talk_data.yml：每一集的基本內容
- view_helpers.rb：fire.app helper