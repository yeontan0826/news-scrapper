# news-scrapper
간단한 네이버 뉴스 스크래퍼

<br>

![screensht](https://github.com/yeontan0826/news-scrapper/blob/master/assets/screenshots/screenshot.gif)

<br>

<hr>

#### Usage

등록된 네이버 개발자 클라이언트 ID와 Secret Key를 입력해 주세요.

`src/redux/actions/news.js`
```
...
export const getNewsList = (query) => (dispatch) => {
  ...
  fetch(
    ...,
    {
      headers: {
        'X-Naver-Client-Id': '클라이언트 ID', // 네이버 개발자 클라이언트 ID
        'X-Naver-Client-Secret': '클라이언트 Secret Key', // 클라이언트 Secret Key
      },
    }
  )
  ...
}
...
```
