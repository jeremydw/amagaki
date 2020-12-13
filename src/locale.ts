import {Pod} from './pod';

export class Locale {
  pod: Pod;
  podPath: string;
  id: string;

  constructor(pod: Pod, id: string) {
    this.pod = pod;
    this.id = id;
    this.podPath = `/locales/${id}.yaml`;
  }

  toString() {
    return `[Locale: ${this.id}]`;
  }

  get translations() {
    return this.pod.readYaml(this.podPath);
  }

  getTranslation(value: string) {
    if (!this.pod.fileExists(this.podPath) || !this.translations) {
      return value;
    }
    return this.translations[value] || value;
  }
}
