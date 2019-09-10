import { UndefinedStringsPipe } from './undefined-strings.pipe';

describe('UndefinedStringsPipe', () => {
  it('create an instance', () => {
    const pipe = new UndefinedStringsPipe();
    expect(pipe).toBeTruthy();
  });
});
