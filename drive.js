export class Drive {
  static Start() {
    console.log('Drive loaded');
  }
  static install(options) {
    if(options.type === 'pkg') {
      var pkg = document.createElement("script");
      if(options.extension === true) {
        pkg.src = options.packages.source + options.packages.extension;
      } else if(options.extension === false) {
        pkg.src = options.packages.source;
      } else {
        console.error('No valid Package Extension received');
      }
      document.body.appendChild(pkg);
    } else if(options.type === 'script') {
      var script = document.createElement("script");
      if(options.extension === true) {
        script.src = options.packages.source + options.packages.extension;
      } else if(options.extension === false) {
        script.src = options.packages.source;
      } else {
        console.log('No valid Package Extension received');
      }
      document.body.appendChild(script);
    }
  }
  static download(options) {
    if(options.download === '--drive-fonts') {
      var fontPkg = document.createElement('link');
      fontPkg.rel = "stylesheet";
      fontPkg.href = "https://savagefruit.github.io/CSS-Drive/fonts.css";
      document.head.appendChild(fontPkg);
    } else if(options.download === '--css-bootstrap') {
      var bootstrapPkg = document.createElement('link')
      bootstrapPkg.rel = "stylesheet";
      bootstrapPkg.href = "https://savagefruit.github.io/CSS-Drive/bootstrap.min.css";
      document.head.appendChild(bootstrapPkg);
    } else if(options.download === '--js-angular') {
      var angularPkg = document.createElement("script");
      var angularPkg_ = document.createElement("script");
      angularPkg.src = "https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js";
      angularPkg_.src = "https://cdn.jsdelivr.net/npm/angular@1.7.3/angular.min.js";
      document.body.appendChild(angularPkg);
      document.body.appendChild(angularPkg_);
    } else if(options.download === '--js-vue') {
      var vuePkg = document.createElement("script");
      vuePkg.src = "https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.min.js";
      document.body.appendChild(vuePkg);
    }
  }
  
  static createFragment(options) {
    var name = options.meta.name;
    if(options.drive.log === 'true') {
      var flag = options.meta.flag;
      console.log('Drive "fragment" created @ main.js && args="all" + ?flag = ' + flag)   
    }
    var frag = options.meta.value;
  }
}
