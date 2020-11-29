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
}
