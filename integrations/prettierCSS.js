import { exec } from 'child_process';
import config from '../src/site-config.js';

if (!config.build.css.minify) {
  exec('npm run format:css');
}
