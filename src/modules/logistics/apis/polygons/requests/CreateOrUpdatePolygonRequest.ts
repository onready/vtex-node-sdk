interface GeoShape {
  coordinates?: Array<Array<Array<number>>>;
}

export interface CreateOrUpdatePolygonRequest {
  name?: string;
  geoShape?: GeoShape;
}
