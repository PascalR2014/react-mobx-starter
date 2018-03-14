import { observable, action, computed } from 'mobx';

class AppStore {

    @observable.ref menuCollapsed = false;

    constructor() {
        // set more complex initial values if necessary
    }

    @action
        // change observable with action
    collapseMenu = (collapsed) => {
        console.log(collapsed)
        this.menuCollapsed = collapsed;
    }

    @computed 
    get computedValue() {
        // calculate value depending on @observable e.g. 
    }
    
}

const appState = new AppStore();
export default appState;
