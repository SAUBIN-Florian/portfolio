uniform float time;
varying vec2 vUv;
varying vec3 vPosition;
varying vec2 pixels;
varying vec3 vNormal;
float PI = 3.141592653589793238;

void main(){
  vUv = uv;
  vNormal = normal;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}