import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.preowned.devices',
  appName: 'Rajee',
  webDir: 'www',

  plugins: {
    Keyboard: {
      resize: 'ionic'
    }
  },

  android: {
    webContentsDebuggingEnabled: true,
    adjustMarginsForEdgeToEdge: 'disable',
    allowMixedContent: true,
  },
};

export default config;
