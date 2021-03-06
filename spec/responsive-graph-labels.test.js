import responsiveLabels from '../lib/responsive-graph-labels';

describe('Responsive labels', function() {
    it('Returns the first and last values given an odd number of labels', function() {
        const labelContainerWidth = 200;
        const labelWidth = 38;
        const labelPadding = 27;
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
        const labelContainerWidth = 200;
        const labelWidth = 38;
        const labelPadding = 27;
        const emptyLabelValue = '';
        const labels = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct'];

        const result = responsiveLabels.scale({
            labels,
            labelWidth,
            labelPadding,
            emptyLabelValue,
            labelContainerWidth,
        });
        
        expect(result[0]).toEqual('jan');
        expect(result[result.length - 1]).toEqual('oct');
    });

    it('Returns the first and last values given a number one greater than a prime', function() {
        const labelContainerWidth = 200;
        const labelWidth = 38;
        const labelPadding = 27;
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
        const labelContainerWidth = 200;
        const labelWidth = 38;
        const labelPadding = 27;
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

    it('Returns all of the elements when the container is large enough to hold them', function() {
        const labelContainerWidth = 300;
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
        
        expect(result).toEqual(labels);
    });

    it('Removes elements and replaces them with the specified emptyLabelValue', function() {
        const labelContainerWidth = 200;
        const labelWidth = 38;
        const labelPadding = 27;
        const emptyLabelValue = 'x';
        const labels = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec','jan', 'feb'];

        const result = responsiveLabels.scale({
            labels,
            labelWidth,
            labelPadding,
            emptyLabelValue,
            labelContainerWidth,
        });
        
        expect(result).toContain('x');
    });

    it('Always leaves at least two labels when given an odd number of labels', function() {
        const labelContainerWidth = 200;
        const labelWidth = 38;
        const labelPadding = 27;
        const emptyLabelValue = 'x';
        const labels = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov'];

        const result = responsiveLabels.scale({
            labels,
            labelWidth,
            labelPadding,
            emptyLabelValue,
            labelContainerWidth,
        });
        
        expect(result).toContain('jan');
        expect(result).toContain('nov');
    });

    it('Always leaves at least two labels when given an even number of labels', function() {
        const labelContainerWidth = 200;
        const labelWidth = 38;
        const labelPadding = 27;
        const emptyLabelValue = 'x';
        const labels = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct',];

        const result = responsiveLabels.scale({
            labels,
            labelWidth,
            labelPadding,
            emptyLabelValue,
            labelContainerWidth,
        });
        
        expect(result).toContain('jan');
        expect(result).toContain('oct');
    });

    it('Always leaves at least two labels when given an even number of labels where the number of labels is one greater than a prime', function() {
        const labelContainerWidth = 200;
        const labelWidth = 38;
        const labelPadding = 27;
        const emptyLabelValue = 'x';
        const labels = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];

        const result = responsiveLabels.scale({
            labels,
            labelWidth,
            labelPadding,
            emptyLabelValue,
            labelContainerWidth,
        });
        
        expect(result).toContain('jan');
        expect(result).toContain('dec');
    });

    it('returns the expected distribution of labels given the minimum width and an odd number of labels', function() {
        const labelContainerWidth = 200;
        const labelWidth = 38;
        const labelPadding = 27;
        const emptyLabelValue = 'x';
        const labels = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec','jan'];

        const result = responsiveLabels.scale({
            labels,
            labelWidth,
            labelPadding,
            emptyLabelValue,
            labelContainerWidth,
        });
        
        expect(result).toEqual([ 'jan', 'x', 'x', 'apr', 'x', 'x', 'jul', 'x', 'x', 'oct', 'x', 'x', 'jan' ]);
    });

    it('returns the expected distribution of labels given a mid-range width and an odd number of labels', function() {
        const labelContainerWidth = 400;
        const labelWidth = 38;
        const labelPadding = 27;
        const emptyLabelValue = 'x';
        const labels = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec','jan'];

        const result = responsiveLabels.scale({
            labels,
            labelWidth,
            labelPadding,
            emptyLabelValue,
            labelContainerWidth,
        });
        
        expect(result).toEqual([ 'jan', 'x', 'mar', 'x', 'may', 'x', 'jul', 'x', 'sep', 'x', 'nov', 'x', 'jan' ]);
    });

    it('returns the expected distribution of labels given the minimum width and an even number of labels', function() {
        const labelContainerWidth = 200;
        const labelWidth = 38;
        const labelPadding = 27;
        const emptyLabelValue = 'x';
        const labels = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct'];

        const result = responsiveLabels.scale({
            labels,
            labelWidth,
            labelPadding,
            emptyLabelValue,
            labelContainerWidth,
        });
        
        expect(result).toEqual([ 'jan', 'x', 'x', 'apr', 'x', 'x', 'jul', 'x', 'x', 'oct' ]);
    });

    it('returns the expected distribution of labels given a mid-range width and an even number of labels', function() {
        const labelContainerWidth = 400;
        const labelWidth = 38;
        const labelPadding = 27;
        const emptyLabelValue = 'x';
        const labels = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct'];

        const result = responsiveLabels.scale({
            labels,
            labelWidth,
            labelPadding,
            emptyLabelValue,
            labelContainerWidth,
        });
        
        expect(result).toEqual([ 'jan', 'x', 'x', 'apr', 'x', 'x', 'jul', 'x', 'x', 'oct' ]);
    });

    it('returns the expected distribution of labels given the minimum width and where the number of labels is one greater than a prime', function() {
        const labelContainerWidth = 200;
        const labelWidth = 38;
        const labelPadding = 27;
        const emptyLabelValue = 'x';
        const labels = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct', 'nov', 'dec'];

        const result = responsiveLabels.scale({
            labels,
            labelWidth,
            labelPadding,
            emptyLabelValue,
            labelContainerWidth,
        });
        
        expect(result).toEqual([ 'jan', 'x', 'x', 'x', 'x', 'x', 'jul', 'x', 'x', 'x', 'x', 'dec' ]);
    });

    it('returns the expected distribution of labels given a mid-range width and where the number of labels is one greater than a prime', function() {
        const labelContainerWidth = 400;
        const labelWidth = 38;
        const labelPadding = 27;
        const emptyLabelValue = 'x';
        const labels = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct', 'nov', 'dec'];

        const result = responsiveLabels.scale({
            labels,
            labelWidth,
            labelPadding,
            emptyLabelValue,
            labelContainerWidth,
        });
        
        expect(result).toEqual([ 'jan', 'x', 'mar', 'x', 'may', 'x', 'x', 'aug', 'x', 'oct', 'x', 'dec' ]);
    });
});
