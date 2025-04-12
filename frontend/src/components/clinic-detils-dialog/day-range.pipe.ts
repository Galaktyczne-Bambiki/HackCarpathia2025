import { Pipe, PipeTransform } from '@angular/core';

export const dayMap = {
  1: 'pn',
  2: 'wt',
  3: 'śr',
  4: 'czw',
  5: 'pt',
  6: 'sob',
  7: 'nd',
};

@Pipe({
  name: 'dayRange',
})
export class DayRangePipe implements PipeTransform {
  transform(value: Array<1 | 2 | 3 | 4 | 5 | 6 | 7>): string {
    if (value.length === 1) return dayMap[value[0]];
    const lastValue = value.at(-1) ?? 7;
    const [firstValue] = value;
    return `${dayMap[firstValue]}-${dayMap[lastValue]}`;
  }
}
