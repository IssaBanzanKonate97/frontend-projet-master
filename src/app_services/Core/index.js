class Core {
  constructor() {
    this.name = "Core";
  }
  get() {
    return this.name;
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export default Core;
