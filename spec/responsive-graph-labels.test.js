import responsiveLabels from '../lib/responsive-graph-labels';

describe('Label container capacity calculator', function() {
    it('Calculates the number of labels able to fit in a container of width x correctly', function() {
        const labelContainerWidth = 70;
        const labelWidth = 10;
        const labelPadding = 5;

        const result = responsiveLabels.resizeLabelArray({
            labels: ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec','jan'],
            labelWidth,
            labelPadding,
            labelContainerWidth,
        });
        
        expect(result).toEqual(6);
    });
});
