import primesFactors from 'primes-and-factors';
import { range } from 'range';

const responsiveGraphLabels = {
    resizeLabelArray(options) {
        ({
            labels: this.labels,
            labelWidth: this.labelWidth,
            labelPadding: this.labelPadding,
            labelContainerWidth: this.labelContainerWidth,
        } = options);

        if (this.canShowAllLabels()) {
            return this.labels;
        }

        return this.distributeLabels();
    },

    distributeLabels() {
        if (this.labels.length % 2 === 0 && primesFactors.isPrime(this.labels.length - 1)) {
            return this.bestPossibleDistribution();
        }

        return this.evenDistribution();
    },

    canShowAllLabels() {
        return this.labels.length < this.labelContainerCapacity();
    },

    labelContainerCapacity() {
        return Math.floor(this.labelContainerWidth / (this.labelWidth + this.labelPadding));
    },

    bestPossibleDistribution() {
        const weightedLimit = this.labelContainerCapacity() - 1;
        const result = [];

        for (let i = 0; i < weightedLimit; i += 1) {
            result.push(this.labels[this.arrayStride(this.labels, i, weightedLimit)]);
        }

        result.push(this.labels[this.labels.length - 1]);

        return this.labels.map((element) => {
            if (element === result.slice(0, 1).pop()) {
                return result.shift();
            }
            return '';
        });
    },

    evenDistribution() {
        const bestProgression = this.findBestProgression();
        const markedIndexes = range(0, this.labels.length, bestProgression.factor);

        return this.labels.map((element, index) => {
            if (markedIndexes.indexOf(index) !== -1) {
                return element;
            }

            return '';
        });
    },

    generateProgressionOptions() {
        const factors = primesFactors.getUniqueFactors(this.labels.length - 1);
        return factors.map((value) => {
            const count = ((this.labels.length - 1) / value) + 1;
            return {
                factor: value,
                count,
            };
        });
    },

    findBestProgression() {
        const limit = this.labelContainerCapacity();
        const options = this.generateProgressionOptions();
        return options.reduce((prev, curr) => (Math.abs(curr.count - limit) < Math.abs(prev.count - limit) ? curr : prev));
    },

    arrayStride(labels, index, limit) {
        return Math.floor(index * (labels.length / limit));
    },
};

export default responsiveGraphLabels;
