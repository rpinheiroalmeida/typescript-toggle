import { Feature } from "./feature";

export class MemoryProvider {

    private features: Array<Feature>;

    constructor(features: Array<Feature>) {
        this.features = features;
    }

    public isOn(name: string) {
        return this.features.some(feature => feature.name === name && feature.active)
    }
}