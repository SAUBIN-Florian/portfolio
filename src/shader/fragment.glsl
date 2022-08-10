uniform float time;
uniform float progress;
uniform sample2D mountains;
uniform vec4 resolution;
varying vec2 vUv;
varying vec3 vNormal;
float PI = 3.141592653589793238;

void main() {
  float diffuse = dot(vNormal, vec3(1.));
  vec4 t = texture2D(mountains, vUv);
  gl_FragColor = t;
  gl_FragColor = vec4(diffuse);
}