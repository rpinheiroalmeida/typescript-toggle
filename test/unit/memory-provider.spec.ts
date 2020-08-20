import { MemoryProvider } from "../../lib/memory-provider";
import { Feature } from "../../lib/feature";

describe('Memory Provider', () => {
    describe('should be turned on', () => {

        const features: Array<Feature> = [
            {
                name: 'featureA',
                active: true,
            } as Feature,
            {
                name: 'featureB',
                active: false,
            } as Feature,
        ];

        const memoryProvider: MemoryProvider = new MemoryProvider(features);

        it('when the feature is turned on', () => {
            expect(memoryProvider.isOn('featureA')).toBeTruthy();
        });

        it('when the feature is turned off', () => {
            expect(memoryProvider.isOn('featureB')).toBeFalsy();
        });

        it('when the feature does not exist', () => {
            expect(memoryProvider.isOn('featureC')).toBeFalsy();
        });
    });
});