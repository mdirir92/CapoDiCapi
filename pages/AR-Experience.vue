<template>
<!-- (Animation – A-Frame, n.d.) -->
  <div class style="margin-top:100px;">
    <a-scene arjs=" debugUIEnabled: false;">
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
          ></a-sphere>
        </a-entity>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  </div>
  <!-- A-Frame. n.d. Animation – A-Frame. [online] Available at: <https://aframe.io/docs/1.0.0/components/animation.html> [Accessed 13 May 2020]. -->
</template>
<script>
export default {
  created() {}
};
</script>
