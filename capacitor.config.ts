import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.preowned.devices',
  appName: 'Rajee',
  webDir: 'www',
  // bundledWebRuntime: false,
  plugins: {
    Keyboard: {
      resize: 'none'
    }
  }
};

export default config;
