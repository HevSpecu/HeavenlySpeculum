import * as THREE from 'three';
const SMOOTHING = 8; // higher = snappier
let smoothedPercent = 0;
const currentLookAtVec = new THREE.Vector3(0, 0, 0);

// Get scroll percentage
function getScrollPercent() {
  const scrollTop = typeof window !== 'undefined'
    ? (window.scrollY || document.documentElement.scrollTop || 0)
    : 0;
  const totalScroll = Math.max((document.documentElement.scrollHeight - window.innerHeight), 1);
  const raw = scrollTop / totalScroll;
  return THREE.MathUtils.clamp(raw, 0, 1);
}

// Define camera positions for each section
const cameraPositions = {
  // Initial Hero position
  hero: {
    position: new THREE.Vector3(0, 0, 50),
    target: new THREE.Vector3(0, 0, 0),
  },
  // Aiamgine Gallery
  aiamgine: {
    position: new THREE.Vector3(30, 10, 30),
    target: new THREE.Vector3(0, 0, 0),
  },
  // SDNUChronoSync Timeline
  sdnuChronoSync: {
    position: new THREE.Vector3(-30, 20, -20),
    target: new THREE.Vector3(0, 0, -10),
  },
  // Acceleration Mirror Tunnels
  accelerationMirror: {
    position: new THREE.Vector3(0, 40, 0),
    target: new THREE.Vector3(0, 0, 0),
  },
  // Gastigado Image Core
  gastigado: {
    position: new THREE.Vector3(0, 60, 40),
    target: new THREE.Vector3(0, 0, 0),
  },
  // Footer position
  footer: {
    position: new THREE.Vector3(0, 100, 100),
    target: new THREE.Vector3(0, 0, 0),
  },
};

// No persistent camera state beyond lookAt smoothing; we directly damp camera each frame

// Main animation function
export function animation(renderer, delta = 1 / 60) {
  const percent = getScrollPercent();
  // Smooth the scroll percent to avoid stutter from discrete scroll updates
  smoothedPercent = THREE.MathUtils.damp(smoothedPercent, percent, SMOOTHING, delta);

  // Determine current section based on scroll percentage
  // 0% - Hero
  // 20% - Aiamgine
  // 40% - SDNUChronoSync
  // 60% - Acceleration Mirror
  // 80% - Gastigado
  // 100% - Footer

  let targetPosition, targetLookAt;

  if (smoothedPercent <= 0.2) {
    // 0% - 20%: Hero to Aiamgine
    const localPercent = smoothedPercent / 0.2;
    targetPosition = lerpVector3(
      cameraPositions.hero.position,
      cameraPositions.aiamgine.position,
      easeInOutCubic(localPercent)
    );
    targetLookAt = lerpVector3(
      cameraPositions.hero.target,
      cameraPositions.aiamgine.target,
      easeInOutCubic(localPercent)
    );
  } else if (smoothedPercent <= 0.4) {
    // 20% - 40%: Aiamgine to SDNUChronoSync
    const localPercent = (smoothedPercent - 0.2) / 0.2;
    targetPosition = lerpVector3(
      cameraPositions.aiamgine.position,
      cameraPositions.sdnuChronoSync.position,
      easeInOutCubic(localPercent)
    );
    targetLookAt = lerpVector3(
      cameraPositions.aiamgine.target,
      cameraPositions.sdnuChronoSync.target,
      easeInOutCubic(localPercent)
    );
  } else if (smoothedPercent <= 0.6) {
    // 40% - 60%: SDNUChronoSync to Acceleration Mirror
    const localPercent = (smoothedPercent - 0.4) / 0.2;
    targetPosition = lerpVector3(
      cameraPositions.sdnuChronoSync.position,
      cameraPositions.accelerationMirror.position,
      easeInOutCubic(localPercent)
    );
    targetLookAt = lerpVector3(
      cameraPositions.sdnuChronoSync.target,
      cameraPositions.accelerationMirror.target,
      easeInOutCubic(localPercent)
    );
  } else if (smoothedPercent <= 0.8) {
    // 60% - 80%: Acceleration Mirror to Gastigado
    const localPercent = (smoothedPercent - 0.6) / 0.2;
    targetPosition = lerpVector3(
      cameraPositions.accelerationMirror.position,
      cameraPositions.gastigado.position,
      easeInOutCubic(localPercent)
    );
    targetLookAt = lerpVector3(
      cameraPositions.accelerationMirror.target,
      cameraPositions.gastigado.target,
      easeInOutCubic(localPercent)
    );
  } else {
    // 80% - 100%: Gastigado to Footer
    const localPercent = (smoothedPercent - 0.8) / 0.2;
    targetPosition = lerpVector3(
      cameraPositions.gastigado.position,
      cameraPositions.footer.position,
      easeInOutCubic(localPercent)
    );
    targetLookAt = lerpVector3(
      cameraPositions.gastigado.target,
      cameraPositions.footer.target,
      easeInOutCubic(localPercent)
    );
  }

  const camera = renderer.camera;

  // Delta-based damping for camera position for frame-rate independence
  camera.position.x = THREE.MathUtils.damp(camera.position.x, targetPosition.x, SMOOTHING, delta);
  camera.position.y = THREE.MathUtils.damp(camera.position.y, targetPosition.y, SMOOTHING, delta);
  camera.position.z = THREE.MathUtils.damp(camera.position.z, targetPosition.z, SMOOTHING, delta);

  // Smooth the lookAt target and slerp the camera orientation towards it
  currentLookAtVec.x = THREE.MathUtils.damp(currentLookAtVec.x, targetLookAt.x, SMOOTHING, delta);
  currentLookAtVec.y = THREE.MathUtils.damp(currentLookAtVec.y, targetLookAt.y, SMOOTHING, delta);
  currentLookAtVec.z = THREE.MathUtils.damp(currentLookAtVec.z, targetLookAt.z, SMOOTHING, delta);

  const lookAtMatrix = new THREE.Matrix4().lookAt(camera.position, currentLookAtVec, camera.up);
  const targetQuat = new THREE.Quaternion().setFromRotationMatrix(lookAtMatrix);
  const slerpAlpha = 1 - Math.exp(-SMOOTHING * delta);
  camera.quaternion.slerp(targetQuat, slerpAlpha);
}

// Helper functions
function lerpVector3(v1, v2, t) {
  return new THREE.Vector3(
    THREE.MathUtils.lerp(v1.x, v2.x, t),
    THREE.MathUtils.lerp(v1.y, v2.y, t),
    THREE.MathUtils.lerp(v1.z, v2.z, t)
  );
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Additional camera animations for specific interactions
export function zoomToProject(renderer, projectName) {
  const target = cameraPositions[projectName];
  if (!target) return;

  // Smooth zoom to project
  const animate = () => {
    renderer.camera.position.lerp(target.position, 0.1);
    const currentLookAt = new THREE.Vector3(0, 0, 0);
    renderer.camera.getWorldDirection(currentLookAt);
    currentLookAt.multiplyScalar(50);
    renderer.camera.lookAt(target.target);

    if (renderer.camera.position.distanceTo(target.position) > 0.1) {
      requestAnimationFrame(animate);
    }
  };
  animate();
}

// Reset camera to hero position
export function resetCamera(renderer) {
  renderer.camera.position.lerp(cameraPositions.hero.position, 0.1);
  renderer.camera.lookAt(cameraPositions.hero.target);
}