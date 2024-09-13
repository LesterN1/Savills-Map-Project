'use client'

import React from "react";
import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function MapboxMap() {
    const mapContainerRef = useRef();
    const mapRef = useRef(null);
    const MAPBOX_TOKEN = "pk.eyJ1IjoibjFjaHJpc3RpYW4iLCJhIjoiY2x6MG80Y2hrMTgxaDJrcHNkMWtvZWx0MCJ9.kHvL5J2yJH2lPYSmk7sBng";

    useEffect(() => {
        mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
    
        mapRef.current = new mapboxgl.Map({
          container: mapContainerRef.current,
          center: [-74.5, 40], // starting position [lng, lat]
          zoom: 9 // starting zoom
        });
      });
    
      return (
        <div
          style={{ height: '100%' }}
          ref={mapContainerRef}
          className="map-container"
        />
      );
}