/**
 * Created by ed on 24/03/2018.
 */

'use strict';

class Serializer {
  constructor(route) {
    this._route = route;
  }

  serialize() {}
}

export class SerializerJpx extends Serializer {
  serialize() {
    return `<gpx version="1.1">
      <trk>
        <name>${this._route.name}</name>
        <trkseg>
         ${
      this._route._points.map(
        point => `<trkpt lat="${point.lat}" lon="${point.lon}"></trkpt>`,
      ).reduce((a, b) => `${a}${b}`, '')
      }
        </trkseg>
      </trk>
    </gpx>
    `;
  }
}