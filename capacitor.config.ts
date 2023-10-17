import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'todolist',
  webDir: 'build',
  server: {
    androidScheme: 'http'
  }
};

export default config;
