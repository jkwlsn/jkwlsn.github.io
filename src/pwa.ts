import { registerSW } from 'virtual:pwa-register';

registerSW({
  immediate: true,
  onRegisteredSW(_swScriptUrl) {},
  onOfflineReady() {},
});
