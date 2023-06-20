import React, { useMemo } from 'react';
import * as THREE from 'three';
import { geoAzimuthalEquidistant, geoPath } from 'd3-geo';

export const MapShape = ({ feature }) => {
  const shapeGeometry = useMemo(() => {
    const projection = geoAzimuthalEquidistant().fitSize([360, 360], feature);
    const geoGenerator = geoPath().projection(projection);
    const geoJson = geoGenerator(feature);

    const path = new THREE.Path().fromString(geoJson);
    return new THREE.ShapeGeometry(path);
  }, [feature]);

  return (
    <mesh
      geometry={shapeGeometry}
      material={new THREE.MeshBasicMaterial({ color: 'orange', side: THREE.DoubleSide })}
      position={getSpherePosition(shapeGeometry)}
      rotation={getSphereRotation(shapeGeometry)}
    />
  );
};

function getSpherePosition(shapeGeometry) {
  const bbox = new THREE.Box3().setFromObject(new THREE.Mesh(shapeGeometry));
  const center = new THREE.Vector3().addVectors(bbox.min, bbox.max).multiplyScalar(0.5);
  const radius = 5;
  const spherical = new THREE.Spherical(radius, center.y * Math.PI / 180, center.x * Math.PI / -180);
  const position = new THREE.Vector3().setFromSpherical(spherical);

  return position;
}

function getSphereRotation(shapeGeometry) {
  const bbox = new THREE.Box3().setFromObject(new THREE.Mesh(shapeGeometry));
  const center = new THREE.Vector3().addVectors(bbox.min, bbox.max).multiplyScalar(0.5);
  const rotation = new THREE.Euler(center.y * Math.PI / 180, center.x * Math.PI / -180, 0);

  return rotation;
}

export default MapShape