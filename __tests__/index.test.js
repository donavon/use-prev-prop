import { renderHook } from '@testing-library/react-hooks';

import usePrevProp from '../src';

describe('usePrevProp', () => {
  test('should return an initial vbalue of undefined', () => {
    let prevProp;
    renderHook(() => {
      prevProp = usePrevProp(0);
    });
    expect(prevProp).toBe(undefined);
  });

  test('should return the previous value', () => {
    let prop = 0;
    let prevProp;
    const { rerender } = renderHook(() => {
      prevProp = usePrevProp(prop);
    });
    expect(prevProp).toBe(undefined);

    prop = 1;
    rerender();
    expect(prevProp).toBe(0);

    prop = 2;
    rerender();
    expect(prevProp).toBe(1);
  });
});
