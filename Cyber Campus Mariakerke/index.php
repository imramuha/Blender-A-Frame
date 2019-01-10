<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Mixed Reality - Projectweek</title>
  <script src="https://aframe.io/releases/0.8.2/aframe.min.js"></script>
  <script src="//cdn.rawgit.com/donmccurdy/aframe-extras/v2.6.1/dist/aframe-extras.min.js"></script>

</head>

<body>
    <a-scene>  

      <!-- ASSETS -->
      <a-assets>
        <a-asset-item id="my_assets-obj" src="assets/my_assets.obj"></a-asset-item>
        <a-asset-item id="my_assets-mtl" src="assets/my_assets.mtl"></a-asset-item>
        <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg">
      </a-assets>

      <!-- Using the asset management system. -->
      <a-obj-model position="0 -2 0" src="#my_assets-obj" mtl="#my_assets-mtl"></a-obj-model>
      <a-sky src="#skyTexture"></a-sky>
      <a-plane position="0 -2 0" src="#groundTexture" rotation="-90 0 0" width="20" height="20"  color="#34291f"></a-plane>


    </a-scene>


  
</body>

</html>

</html>