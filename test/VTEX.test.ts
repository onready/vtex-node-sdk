import { VTEX } from '../src/VTEX';

describe('VTEX tests', () => {
  const store: string = 'store';
  const appKey: string = 'appKey';
  const appSecret: string = 'appSecret';

  test('Create instance, with all params, creates the instance', () => new Promise((done) => {
    const instance = new VTEX(store, appKey, appSecret);

    expect(instance).not.toBe(null);
    done();
  }));

  test('Create instance, with empty store, throws Error', () => new Promise((done) => {
    expect(() => new VTEX('', appKey, appSecret)).toThrowError();
    done();
  }));

  test('Create instance, with empty appKey, throws Error', () => new Promise((done) => {
    expect(() => new VTEX(store, '', appSecret)).toThrowError();
    done();
  }));

  test('Create instance, with empty appToken, throws Error', () => new Promise((done) => {
    expect(() => new VTEX(store, appKey, '')).toThrowError();
    done();
  }));
});
