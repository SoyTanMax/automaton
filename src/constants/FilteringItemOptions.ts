export enum FilteringItemOptions {
  LOW_TO_HIGH = 'LOW_TO_HIGH',
  HIGH_TO_LOW = 'HIGH_TO_LOW',
}

const optionLabels: Record<FilteringItemOptions, string> = {
  [FilteringItemOptions.LOW_TO_HIGH]: 'Price: Low to high',
  [FilteringItemOptions.HIGH_TO_LOW]: 'Price: High to low',
};

export function getFilteringItemOptions() {
  return Object.entries(FilteringItemOptions).map(([key, value]) => {
      return {
          value, 
          label: optionLabels[value as FilteringItemOptions],
      };
  });
}