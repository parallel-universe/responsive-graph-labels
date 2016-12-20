import responsiveLabels from '../lib/responsive-graph-labels';

describe('Label container capacity calculator', function() {
    it('Returns the first and last values given an odd number of labels', function() {
        const labelContainerWidth = 70;
        const labelWidth = 10;
        const labelPadding = 5;
        const emptyLabelValue = '';
        const labels = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec','jan'];

        const result = responsiveLabels.scale({
            labels,
            labelWidth,
            labelPadding,
            emptyLabelValue,
            labelContainerWidth,
        });
        
        expect(result[0]).toEqual('jan');
        expect(result[result.length - 1]).toEqual('jan');
    });

    it('Returns the first and last values given an even number of labels', function() {
        const labelContainerWidth = 70;
        const labelWidth = 10;
        const labelPadding = 5;
        const emptyLabelValue = '';
        const labels = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec','jan', 'feb'];

        const result = responsiveLabels.scale({
            labels,
            labelWidth,
            labelPadding,
            emptyLabelValue,
            labelContainerWidth,
        });
        
        expect(result[0]).toEqual('jan');
        expect(result[result.length - 1]).toEqual('feb');
    });

    it('Returns the same number of elements as was provided', function() {
        const labelContainerWidth = 70;
        const labelWidth = 10;
        const labelPadding = 5;
        const emptyLabelValue = '';
        const labels = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec','jan', 'feb'];

        const result = responsiveLabels.scale({
            labels,
            labelWidth,
            labelPadding,
            emptyLabelValue,
            labelContainerWidth,
        });
        
        expect(result.length).toEqual(labels.length);
    });
});
