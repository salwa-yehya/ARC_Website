import React, { Suspense, useState, useEffect, useRef, forwardRef  } from 'react';
import { Canvas, useFrame, useLoader} from 'react-three-fiber';
import { OrbitControls, Cone } from '@react-three/drei';
import * as topojson from 'topojson-client';
import { geoAzimuthalEquidistant, geoPath } from 'd3-geo';
import * as THREE from 'three';
import { TextureLoader } from 'three';

const FlatMap = () => {
  const [geoData, setGeoData] = useState(null);

  const texture = useLoader(TextureLoader, 'earth_texture.jpg');
  const meshRef = useRef();
  
  useEffect(() => {
    fetch('https://unpkg.com/world-atlas@2.0.0/dist/110m.json')/// need fixing file is empty
      .then((response) => response.json())
      .then((data) => {
        const countries = topojson.feature(data, data.objects.countries);
        setGeoData(countries);
      })
      .catch((error) => console.error(error));
  }, []);
    

  return (
    <Canvas>
      <OrbitControls />
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <RotatingMesh ref={meshRef} texture={texture}>
          {geoData &&
            geoData.features.map((feature, index) => (
              <CountryGeometry key={index} feature={feature} />
            ))}
          <RotatingCone
            args={[0.02, 0.1, 32]} // Adjust the size of the cone here
            position={latlongToVector3(31.95, 35.91, 1.05)} // Adjust the position of the cone here
            rotation={[-1, 0, Math.PI/1.5]}
          >
            <meshStandardMaterial color="red" />
          </RotatingCone>
        </RotatingMesh>
      </Suspense>
    </Canvas>
  );
};

const RotatingMesh = forwardRef(({ children, texture }, ref) => {
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() / 15; // Change 10 to a larger number for slower rotation
  });

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial map={texture} />
      </mesh>
      {children}
    </group>
  );
});

const RotatingCone = forwardRef(({ ...props }, ref) => {
  return (
    <Cone ref={ref} {...props} />
  );
});

const CountryGeometry = ({ feature }) => {
  const [geometry, setGeometry] = useState(null);
  const material = new THREE.MeshBasicMaterial({ color: 'orange', side: THREE.DoubleSide });

  useEffect(() => {
    const projection = geoAzimuthalEquidistant().translate([0, 0]);
    const pathGenerator = geoPath().projection(projection);
    const svgPath = pathGenerator(feature);

    const shape = svgPathToShape(svgPath);
    const extrudeSettings = { depth: 0.05, bevelEnabled: false };
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    setGeometry(geometry);
  }, [feature]);

  if (!geometry) return null;

  return <mesh geometry={geometry} material={material} />;
};

const latlongToVector3 = (lat, lon, radius = 1.05) => {
  lat += -2.2; // adjust latitude value
  lon += 90.5; // adjust longitude value

  const spherical = new THREE.Spherical(
    radius,
    THREE.MathUtils.degToRad(90 - lat),
    THREE.MathUtils.degToRad(lon)
  );
  return new THREE.Vector3().setFromSpherical(spherical);
};

function svgPathToShape(svgPath) {
  const path = new THREE.Path();
  const svgPathData = svgPath.split(/[ ,]/);
  let command, x1, y1, x2, y2, x, y;
  while (svgPathData.length) {
    command = svgPathData.shift();
    switch (command) {
      case 'M':
        x = parseFloat(svgPathData.shift());
        y = parseFloat(svgPathData.shift());
        path.moveTo(x, y);
        break;
      case 'C':
        x1 = parseFloat(svgPathData.shift());
        y1 = parseFloat(svgPathData.shift());
        x2 = parseFloat(svgPathData.shift());
        y2 = parseFloat(svgPathData.shift());
        x = parseFloat(svgPathData.shift());
        y = parseFloat(svgPathData.shift());
        path.bezierCurveTo(x1, y1, x2, y2, x, y);
        break;
      case 'L':
        x = parseFloat(svgPathData.shift());
        y = parseFloat(svgPathData.shift());
        path.lineTo(x, y);
        break;
      case 'Z':
        path.closePath();
        break;
    }
  }
  return path;
}

export default FlatMap;