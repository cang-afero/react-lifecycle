/*global WEBAPP_CONFIG*/
/*eslint no-undef: ["error", { "typeof": true }] */

export default (() => {
  const defaultConfig = {
    production: false,
    cloudEnv: 'dev'
  };
  const runtimeConf = typeof WEBAPP_CONFIG === 'undefined' ? {} : WEBAPP_CONFIG;

  const ret = Object.assign(defaultConfig, runtimeConf);

  return ret;
})();
