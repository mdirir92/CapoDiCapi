<template>
  <a-scene arjs>
    <a-assets>
      <img id="logosphere" src="sphere.png" />
    </a-assets>
    <a-marker preset="custom" type="pattern" url="logo.patt" audhandler>
      <a-entity rotation="300 0 0">
        <a-sphere
          src="#logosphere"
          radius=".5"
          segments-height="50"
          rotation="0 0 0"
          opacity="0.98"
          sound="src: url(sound.mp3); autoplay: false; loop: true"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 10000;easing: linear"
        >
        </a-sphere>
      </a-entity>
    </a-marker>
    <a-entity camera></a-entity>
  </a-scene>
</template>
<script>
export default {};
</script>
