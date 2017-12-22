import * as L from 'leaflet';

declare module 'leaflet' {
  class CanvasLayer extends Layer {
    delegate(
      del: any
    ):void;

    needRedraw():void;

    getEvents():void;

    onAdd(
      map: Map
    ):void;

    onRemove(
      map: Map
    ):void;

    addTo(
      map: Map
    ):void;

    LatLonToMercator(
      latlon: LatLng
    ):void;

    drawLayer():void;

  }
}