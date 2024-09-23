function scriptMfe(remoteUrl, appName) {
  return `
    new Promise((resolve, reject) => {
      const remoteUrl = "${remoteUrl}";
      const script = document.createElement("script");
      script.src = remoteUrl;
      script.onload = () => {
        const proxy = {
          get: (request) => window.${appName}.get(request),
          init: (arg) => {
            try {
              return window.${appName}.init(arg);
            } catch (e) {
              console.log("remote container already initialized");
            }
          },
        };
        resolve(proxy);
      };
      script.onerror = () => {
        reject();
      };
      document.head.appendChild(script);
    });`;
}

module.exports = scriptMfe;
