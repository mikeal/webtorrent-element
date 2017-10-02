const ZComponent = require('zcomponent')
const WebTorrent = require('webtorrent')
const magnetURL = require('magnet-uri')

const client = new WebTorrent()

const getTorrent = (magnet, fn) => {
  let decoded = magnetURL(magnet)
  for (let torrent of client.torrents) {
    if (torrent.infoHash === decoded.infoHash) {
      // TODO: make sure all trackers and web seeds are added
      return fn(torrent)
    }
  }
  client.add(magnet, fn)
}

class WebTorrentElement extends ZComponent {
  set file (file) {
    this._file = file
  }
  set src (magnet) {
    getTorrent(magnet, torrent => {
      torrent.files.forEach(file => {
        if (this._file) {
          if (file.name === this._file || file.path === this._file) {
            file.appendTo(this)
          }
        } else {
          file.appendTo(this)
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

module.exports = WebTorrentElement
window.customElements.define('web-torrent', WebTorrentElement)
