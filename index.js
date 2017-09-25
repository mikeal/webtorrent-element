const ZComponent = require('zcomponent')
const WebTorrent = require('webtorrent')

const client = new WebTorrent()

class WebTorrentComponent extends ZComponent {
  set file (file) {
    this._file = file
  }
  set src (magnet) {
    console.log(magnet)
    client.add(magnet, torrent => {
      torrent.files.forEach(file => {
        if (this._file) {
          if (file.name === this._file || file.path === this._file) {
            file.appendTo(this)
          }
        }
      })
    })
  }

  get shadow () {
    return `
    <style>
    :host {
      padding: 0 0 0 0;
      margin: 0 0 0 0;
    }
    </style>
    <slot>
    </slot>
    `
  }
}

module.exports = WebTorrentComponent
window.customElements.define('web-torrent', WebTorrentComponent)
