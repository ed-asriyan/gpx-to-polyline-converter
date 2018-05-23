/**
 * Created by ed on 24/03/2018.
 */

'use strict';

import Route from './route';

class Deserializer {
  constructor(raw) {
    this._raw = raw;
  }

  deserialize() {}
}

export class DeserializerJpx extends Deserializer {
  deserialize() {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(this._raw, 'text/xml');
    const trk = xmlDoc.getElementsByTagName('trk')[0];

    const route = new Route();

    route._name = trk.getElementsByTagName('name')[0].childNodes[0].nodeValue;
    route._points = [...trk.getElementsByTagName('trkpt')].map(point => {
      const lat = point.getAttribute('lat');
      const lon = point.getAttribute('lon');
      if (isNaN(lat) || isNaN(lon)) throw {};
      return { lat, lon };
    });

    return route;
  }
}
