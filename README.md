# WebTorrent Element

An HTML element you can use to display content on WebTorrent.

<p>
  <a href="https://www.patreon.com/bePatron?u=880479">
    <img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" height="40px" />
  </a>
</p>

Usage:

```html
<body>
  <script src="https://cdn.jsdelivr.net/npm/webtorrent-element@latest/dist/webtorrent-element.min.js"></script>
  <web-torrent src="MAGNETURL" />
</body>
```

Often a torrent contains many files but you only want to display one.
You can do this using the `file` attribute.

 ```html
<web-torrent src="MAGNETURL" file="video.mp4"/>
 ```

Here's some example code you can stick your application to get started. It
loads and plays a Creative Commons video.

```html
<script src="https://cdn.jsdelivr.net/npm/webtorrent-element@latest/dist/webtorrent-element.min.js"></script>
<web-torrent src="magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent"
  file="Sintel.mp4"
  />
```

Since this is just a regular HTML element, and all the content appended as
the torrent loads are regular elements, you can add style in your own app
like you would any other HTML.

### Bundling

If you want to build the component into the JavaScript bundle of your app
you can do so easily, but you'll need to handle loading a WebComponents
polyfill on your own.

```javascript
const WebTorrentComponent = require('webtorrent-element')

let elem = new WebTorrentComponent()
elem.src = MAGNETURL
elem.file = 'Sintel.mp4'
document.body.appendChild(elem)
```
