import appState from './AppStore';

class RootStore {
  constructor() {
    this.appState = appState;
    // add more stores if necessary ..
  }
}

const rootStore = new RootStore()
export default rootStore;
