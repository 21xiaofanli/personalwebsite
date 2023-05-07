// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';
// import { GUI } from 'dat.gui';
// "use strict";
// // License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.
// // Created by L.Zampetti (C) 2017 
// let scene, camera, controls, fov, ratio, near, far, shadow, back, light, renderer, container, particles, width, height, w2, h2, mouse = { x: 0, y: 0 };
// let params = function GalaxyParameters() {
//     function GalaxyParameters() {
//         this.arms = 2,
//             this.stops = 5000,
//             this.revolutions = 1.7,
//             this.radius = 400,
//             this.sparse = 0.4,
//             this.dispersion = 0.6, // more 0 - less 1
//             this.bulge = 0.6,
//             this.vortex = 0.0,
//             this.randomize = function () {
//                 // console.log('gui', gui);
//                 for (let i = 0; i < gui.__controllers.length; i++) {
//                     let c = gui.__controllers[i];
//                     if (c.__min) {
//                         let value = c.__min + (c.__max - c.__min) * Math.random();
//                         // console.log(value, c);
//                         this[c.property] = value;
//                         c.updateDisplay();
//                     }
//                 }
//                 onChange(this);
//             },
//             this.exportPCD = function () {
//                 let geometry = particles.geometry;
//                 let results = PCDExporter(geometry.vertices);
//                 downloadFile(results, 'galaxy.pcd');
//             },
//             this.exportXYZ = function () {
//                 let geometry = particles.geometry;
//                 let results = XYZExporter(geometry.vertices);
//                 downloadFile(results, 'galaxy.xyz');
//             };
//         this.exportPLY = function () {
//             let geometry = particles.geometry;
//             let results = PLYExporter(geometry.vertices);
//             downloadFile(results, 'galaxy.ply');
//         },
//             this.exportOBJ = function () {
//                 let exporter = new THREE.OBJExporter();
//                 let results = exporter.parse(scene);
//                 downloadFile(results, 'galaxy.obj');
//             },
//             this.exportSTL = function () {
//                 let exporter = new THREE.STLExporter(); // new THREE.OBJExporter();
//                 let results = exporter.parse(scene);
//                 downloadFile(results, 'galaxy.stl');
//             };
//         this.armTheta = function () {
//             return Math.PI * 2 / this.arms;
//         };
//         this.modulus = function () {
//             return Math.pow(2, 31);
//         };
//     }
//     return new GalaxyParameters();
// }();
// function createLights() {
//     light = new THREE.HemisphereLight(0xffffff, 0xffffff, .5);
//     shadow = new THREE.DirectionalLight(0xffffff, .8);
//     shadow.position.set(200, 200, 200);
//     shadow.castShadow = true;
//     // shadow.shadowDarkness = .2;
//     back = new THREE.DirectionalLight(0xffffff, .4);
//     back.position.set(-100, 200, 50);
//     // back.shadowDarkness = .2;
//     back.castShadow = true;
//     scene.add(light);
//     scene.add(shadow);
//     scene.add(back);
// }
// function createScene() {
//     width = window.innerWidth;
//     height = window.innerHeight;
//     ratio = width / height;
//     w2 = width / 2;
//     h2 = height / 2;
//     fov = 60;
//     near = 1;
//     far = 20000;
//     scene = new THREE.Scene();
//     // scene.fog = new THREE.Fog(0x363d3d, -1, 3000 );
//     camera = new THREE.PerspectiveCamera(fov, ratio, near, far);
//     camera.position.z = 100;
//     camera.position.y = -300;
//     camera.lookAt(new THREE.Vector3(0, 0, 0));
//     renderer = new THREE.WebGLRenderer({
//         alpha: true,
//         antialias: true
//     });
//     renderer.setSize(width, height);
//     renderer.shadowMap.enabled = true;
//     container = document.getElementById('scene');
//     container.appendChild(renderer.domElement);
//     addListeners();
//     controls = new THREE.OrbitControls(camera, renderer.domElement);
// }
// function addListeners() {
//     function handleMouseMove(event) {
//         mouse = { x: event.clientX, y: event.clientY };
//     }
//     function handleMouseDown(event) {
//         //
//     }
//     function handleMouseUp(event) {
//         //
//     }
//     function handleTouchStart(event) {
//         if (event.touches.length > 1) {
//             event.preventDefault();
//             mousePos = { x: event.touches[0].pageX, y: event.touches[0].pageY };
//         }
//     }
//     function handleTouchEnd(event) {
//         mousePos = { x: windowHalfX, y: windowHalfY };
//     }
//     function handleTouchMove(event) {
//         if (event.touches.length == 1) {
//             event.preventDefault();
//             mousePos = { x: event.touches[0].pageX, y: event.touches[0].pageY };
//         }
//     }
//     function onWindowResize() {
//         width = window.innerWidth;
//         height = window.innerHeight;
//         w2 = width / 2;
//         h2 = height / 2;
//         renderer.setSize(width, height);
//         camera.aspect = width / height;
//         camera.updateProjectionMatrix();
//     }
//     window.addEventListener('resize', onWindowResize, false);
//     document.addEventListener('mousemove', handleMouseMove, false);
//     document.addEventListener('mousedown', handleMouseDown, false);
//     document.addEventListener('mouseup', handleMouseUp, false);
//     document.addEventListener('touchstart', handleTouchStart, false);
//     document.addEventListener('touchend', handleTouchEnd, false);
//     document.addEventListener('touchmove', handleTouchMove, false);
// }
// let tick = 0;
// let axis = new THREE.Vector3(0, 0, 1);
// function vortex() {
//     if ((tick % 2 === 0) && params && params.vortex !== 0) {
//         for (let i = 0; i < particles.geometry.vertices.length; i++) {
//             let vertex = particles.geometry.vertices[i];
//             let angle = (-Math.PI / 180);
//             if (params.vortex > 0) {
//                 angle *= (1 - vertex.length() / params.radius) * params.vortex;
//             }
//             else {
//                 angle *= (vertex.length() / params.radius) * Math.abs(params.vortex);
//             }
//             vertex.applyAxisAngle(axis, angle);
//         }
//         particles.geometry.verticesNeedUpdate = true;
//     }
//     tick++;
// }
// function loop(time) {
//     vortex();
//     particles.rotation.z -= 0.0025;
//     render();
//     requestAnimationFrame(loop);
// }
// function render() {
//     if (controls) {
//         controls.update();
//     }
//     renderer.render(scene, camera);
// }
// function sprite() {
//     let canvas = document.createElement('canvas');
//     canvas.width = 128;
//     canvas.height = 128;
//     let ctx = canvas.getContext('2d');
//     let gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
//     gradient.addColorStop(0, 'rgba(255,255,255,1)');
//     gradient.addColorStop(0.2, 'rgba(240,255,240,1)');
//     gradient.addColorStop(0.22, 'rgba(0,150,255,.2)');
//     gradient.addColorStop(1, 'rgba(0,50,255,0)');
//     ctx.fillStyle = gradient; // "#FFFFFF"; // gradient;
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//     return canvas;
// }
// function bufferGeometry() {
//     var geometry = new THREE.BufferGeometry();
//     // create a simple square shape. We duplicate the top left and bottom right
//     // vertices because each vertex needs to appear once per triangle.
//     var vertices = new Float32Array([
//         -1.0, -1.0, 1.0,
//         1.0, -1.0, 1.0,
//         1.0, 1.0, 1.0,
//         1.0, 1.0, 1.0,
//         -1.0, 1.0, 1.0,
//         -1.0, -1.0, 1.0
//     ]);
//     // itemSize = 3 because there are 3 values (components) per vertex
//     geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3));
// }
// function createObjects() {
//     let texture = new THREE.CanvasTexture(sprite());
//     let geometry = new THREE.Geometry();
//     let material = new THREE.PointsMaterial({
//         size: 8,
//         map: texture,
//         vertexColors: THREE.VertexColors,
//         blending: THREE.AdditiveBlending,
//         depthTest: false,
//         transparent: true
//     });
//     particles = new THREE.Points(geometry, material);
//     scene.add(particles);
// }
// createScene();
// createObjects();
// // createLights();
// loop();
// let GPoint = function () {
//     var unit = {
//         x: 0.09,
//         y: 0.09,
//         z: 0.3
//     };
//     function GPoint(x, y, z) {
//         this.x = x || 0;
//         this.y = y || 0;
//         this.z = z || 0;
//     }
//     GPoint.prototype = {
//         randomize: function () {
//             this.x = Math.random() * 1000;
//             this.y = Math.random() * 1000;
//             this.z = Math.random() * 1000;
//             return this;
//         },
//         toGrid: function () {
//             this.x = (Math.round(this.x / unit.x) * unit.x);
//             this.y = (Math.round(this.y / unit.y) * unit.y);
//             this.z = (Math.round(this.z / unit.z) * unit.z);
//             return this;
//         },
//         toFixed: function () {
//             this.x = +(this.x.toFixed(2));
//             this.y = +(this.y.toFixed(2));
//             this.z = +(this.z.toFixed(2));
//             return this;
//         },
//     };
//     GPoint.grid = function (points) {
//         for (var i = 0; i < points.length; i++) {
//             points[i].toGrid().toFixed();
//         }
//         GPoint.sort(points);
//     };
//     GPoint.sort = function (points) {
//         points.sort(function (a, b) {
//             if (a.z === b.z) {
//                 if (a.x === b.x) {
//                     if (a.y === b.y) {
//                         return 0;
//                     }
//                     else {
//                         return a.y > b.y ? 1 : -1;
//                     }
//                 }
//                 else {
//                     return a.x > b.x ? 1 : -1;
//                 }
//             }
//             else {
//                 return a.z > b.z ? 1 : -1;
//             }
//         });
//     };
//     return GPoint;
// }();
// function spiral(params) {
//     function lcg(value, modulus = Math.pow(2, 31), multiplier = 1103515245, increment = 12345) {
//         return (value * multiplier + increment) % modulus;
//     }
//     return {
//         toArray: function (now = 0) {
//             const time = now / -60000, modulus = params.modulus(), theta = params.armTheta();
//             let points = [];
//             let value = 0;
//             for (let arm = 0; arm < params.arms; arm++) {
//                 for (let stop = 0; stop < params.stops; stop++) {
//                     value = lcg(value, modulus);
//                     const pow = (stop / params.stops), c = 1 - pow + 1 - params.dispersion, r = value / modulus, cr = (r - .5) * 2, angle = (pow * Math.PI * 2 * params.revolutions) + (theta * arm), radians = time + angle + (Math.PI * c * cr * params.sparse), distance = Math.sqrt(pow) * params.radius, x = Math.cos(radians) * distance, y = Math.sin(radians) * distance, z = 0, size = (r - .5) * 2 + Math.pow(1.125, (1 - pow) * 8), alpha = (Math.sin((r + time + pow) * Math.PI * 2) + 1) * 0.5;
//                     points.push({
//                         x: x, y: y, z: z,
//                         size: size, alpha: alpha,
//                     });
//                 }
//             }
//             return points;
//         },
//     };
// }
// function onChange(params) {
//     /*
//     var points = [
//       new GPoint().randomize(),
//       new GPoint().randomize(),
//       new GPoint().randomize(),
//       new GPoint().randomize(),
//       new GPoint().randomize(),
//     ];
//     GPoint.grid(points);
//     */
//     // alert('onChange', data);
//     let dx = 10 - 10 * params.dispersion * (1 - params.bulge);
//     let dy = 10 - 10 * params.dispersion * (1 - params.bulge);
//     let dz = 40 - 40 * params.dispersion * (1 - params.bulge);
//     // let geometry = particles.geometry;
//     let geometry = new THREE.Geometry();
//     // geometry.vertices.splice(0, geometry.vertices.length);
//     let points = spiral(params).toArray();
//     for (let i = 0; i < points.length; i++) {
//         let point = points[i];
//         let distance = Math.pow(Math.pow(point.x, 2) + Math.pow(point.y, 2), 0.5);
//         let pow = Math.max(0, ((params.radius * .8) - distance) / (params.radius * .8));
//         pow = (1 - Math.cos(pow * Math.PI)) * params.bulge;
//         // console.log(distance);
//         let vertex = new THREE.Vector3();
//         vertex.x = point.x;
//         vertex.y = point.y;
//         vertex.z = (-dz + (dz * 2) * Math.random()) * pow; // (Math.random() * 180 - 90) * (pow * pow * pow);
//         geometry.vertices.push(vertex);
//         geometry.colors.push(new THREE.Color(pow, pow, 1));
//         let t = Math.round(pow * 5), n = 0;
//         while (n < t) {
//             let vertex = new THREE.Vector3();
//             vertex.x = point.x - dx + Math.random() * (dx * 2);
//             vertex.y = point.y - dy + Math.random() * (dy * 2);
//             vertex.z = (-dz + (dz * 2) * Math.random()) * pow;
//             geometry.vertices.push(vertex);
//             geometry.colors.push(new THREE.Color(pow, pow, 1));
//             n++;
//         }
//     }
//     geometry.mergeVertices();
//     geometry.verticesNeedUpdate = true;
//     particles.geometry = geometry;
// }
// let gui = function datgui() {
//     let gui = new dat.GUI();
//     gui.closed = true;
//     gui.add(params, 'arms', 1, 10).onChange(function (newValue) {
//         onChange(params);
//     });
//     gui.add(params, 'stops', 1000, 10000).onChange(function (newValue) {
//         onChange(params);
//     });
//     gui.add(params, 'revolutions', 1.1, 3.1).onChange(function (newValue) {
//         onChange(params);
//     });
//     gui.add(params, 'radius', 300, 1000).onChange(function (newValue) {
//         onChange(params);
//     });
//     gui.add(params, 'sparse', 0.1, 1).onChange(function (newValue) {
//         onChange(params);
//     });
//     gui.add(params, 'dispersion', 0.01, 1).onChange(function (newValue) {
//         onChange(params);
//     });
//     gui.add(params, 'bulge', 0.01, 1).onChange(function (newValue) {
//         onChange(params);
//     });
//     gui.add(params, 'vortex', -1, 1, 0.01).onChange(function (newValue) {
//         onChange(params);
//     });
//     // gui.add(text, 'displayOutline');
//     gui.add(params, 'randomize');
//     gui.add(params, 'exportXYZ').name('EXPORT *.XYZ');
//     return gui;
// }();
// onChange(params);
// let downloadFile = (function () {
//     var a = document.createElement("a");
//     document.body.appendChild(a);
//     a.style = "display: none";
//     return function (data, fileName, json) {
//         data = json ? JSON.stringify(data) : data;
//         let blob = new Blob([data], { type: "octet/stream" }), url = window.URL.createObjectURL(blob);
//         a.href = url;
//         a.download = fileName;
//         a.click();
//         window.URL.revokeObjectURL(url);
//     };
// }());
// function string2ArrayBuffer(string, callback) {
//     let blob = new Blob([string]);
//     var fr = new FileReader();
//     fr.onload = function (e) {
//         callback(e.target.result);
//     };
//     fr.readAsArrayBuffer(blob);
// }
// function PCDExporter(vertices) {
//     let data = '# .PCD v.7 - Point Cloud Data file format' + '\r\n';
//     data += 'VERSION .7' + '\r\n';
//     data += 'FIELDS x y z rgb' + '\r\n';
//     data += 'SIZE 4 4 4 4' + '\r\n';
//     data += 'TYPE F F F F' + '\r\n';
//     data += 'COUNT 1 1 1 1' + '\r\n';
//     data += 'WIDTH ' + vertices.length + '\r\n';
//     data += 'HEIGHT 1' + '\r\n';
//     data += 'VIEWPOINT 0 0 0 1 0 0 0' + '\r\n';
//     data += 'POINTS ' + vertices.length + '\r\n';
//     data += 'DATA ascii' + '\r\n';
//     for (let i = 0; i < vertices.length; i++) {
//         let v = vertices[i];
//         let x = v.x.toFixed(5);
//         let y = v.y.toFixed(5);
//         let z = v.z.toFixed(5);
//         data += x + ' ' + y + ' ' + z + ' 4.2108e+06';
//         if (i < vertices.length - 1) {
//             data += '\r\n';
//         }
//     }
//     /*
//     console.log('data', data);
//     var loader = new THREE.PCDLoader();
//     string2ArrayBuffer(data, function(arrayBuffer) {
//       var check = loader.parse(arrayBuffer);
//       console.log('check', check);
//     });
//     */
//     return data;
// }
// // https://cdn.rawgit.com/mikolalysenko/write-ply/master/write-ply.js
// function PLYExporter(vertices) {
//     let model = {
//         vertex: {
//             x: [],
//             y: [],
//             z: []
//         },
//         face: {
//             vertex_index: []
//         }
//     };
//     for (let i = 0; i < vertices.length; i++) {
//         let v = vertices[i];
//         model.vertex.x.push(v.x);
//         model.vertex.y.push(v.y);
//         model.vertex.z.push(v.z);
//     }
//     let data = writePLY(model);
//     return data;
// }
// function XYZExporter(vertices) {
//     let data = '';
//     for (let i = 0; i < vertices.length; i++) {
//         let v = vertices[i];
//         let x = v.x.toFixed(6);
//         let y = v.y.toFixed(6);
//         let z = v.z.toFixed(6);
//         data += x + ' ' + y + ' ' + z + '\r\n';
//     }
//     return data;
// }
