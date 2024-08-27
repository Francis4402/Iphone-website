import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import PropTypes from 'prop-types';
import Lights from "./Lights";
import { Suspense } from "react";
import Iphone from "./Iphone";
import * as THREE from 'three';

const ModelView = ({index, groupRef, gsapType, controlRef, setRotationSize, size, item}) => {
  return (
    <View index={index} id={gsapType} className={`border-2 border-red-500 w-full h-full ${index === 2} ? 'right-[-100%] : ''`}>
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls makeDefault ref={controlRef} enableZoom={false} enablePan={false} rotateSpeed={0.4} target={new THREE.Vector3(0, 0, 0)} onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())} />

      <group ref={groupRef} name={`${index === 1} ? 'small' : 'large'`} position={[0,0,0]}>
        <Suspense fallback={<Html><div>Loading</div></Html>}>
          <Iphone scale={index === 1 ? [15, 15, 15] : [17, 17, 17]} item={item} size={size} />
        </Suspense>
      </group>
      
    </View>
  )
};

ModelView.propTypes = {
  index: PropTypes.any,
  groupRef: PropTypes.any,
  gsapType: PropTypes.any,
  controlRef: PropTypes.any,
  setRotationSize: PropTypes.any,
  size: PropTypes.any,
  item: PropTypes.any
}

export default ModelView