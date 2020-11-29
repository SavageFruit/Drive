export class Drive {
  static Start() {
    console.log('Drive loaded');
  }
  static install(options) {
    if(options.type === 'pkg') {
      var package = document.createElement("script");
      if(options.extension === true) {
        package.src = options.packages.source + options.packages.extension;
      } else if(options.extension === false) {
        package.src = options.packages.source;
      } else {
        console.error('No valid Package Extension received');
      }
    } else if(options.type === 'script') {
      var script = document.createElement("script");
      if(options.extension === true) {
        script.src = options.packages.source + options.packages.extension;
      } else if(options.extension === false) {
        script.src = options.packages.source;
      } else {
        console.log('No valid Package Extension received');
      }
    }
  }
}
