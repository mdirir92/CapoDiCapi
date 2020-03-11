AFRAME.registerComponent("audhandler", {
    init: function() {
      console.log("INIT");
      this.toggle = false;
      var entity = document.querySelector('[sound]');
      entity.components.sound.stopSound();
    },
    tick: function() {
      if (document.querySelector("a-marker").object3D.visible == true) {
        if (!this.toggle) {
          this.toggle = true;
          var entity = document.querySelector('[sound]');
          entity.components.sound.playSound();
          console.log('PLAY')
        }
      } else {
        if(this.toggle) {
          this.toggle = false;
          var entity = document.querySelector('[sound]');
          entity.components.sound.pauseSound();
          console.log('PAUSE')
        }
      }
    }
  });