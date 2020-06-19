import { VTEX } from '../src/VTEX';

describe('VTEX tests', () => {
  const store: string = 'store';
  const appKey: string = 'appKey';
  const appSecret: string = 'appSecret';

  test('Create instance, with all params, creates the instance', () => new Promise((done) => {
    const instance = new VTEX(store, appKey, appSecret);

    expect(instance).not.toBe(null);

    expect(instance.oms).not.toBe(null);
    expect(instance.oms.orders).not.toBe(null);
    expect(instance.oms.invoice).not.toBe(null);
    expect(instance.oms.tracking).not.toBe(null);
    expect(instance.oms.payment).not.toBe(null);
    expect(instance.oms.feed).not.toBe(null);
    expect(instance.oms.orderHook).not.toBe(null);
    expect(instance.oms.exportOrderReport).not.toBe(null);
    expect(instance.oms.userOrders).not.toBe(null);

    expect(instance.logistics).not.toBe(null);
    expect(instance.logistics.shippingPolicies).not.toBe(null);
    expect(instance.logistics.carriers).not.toBe(null);
    expect(instance.logistics.docks).not.toBe(null);
    expect(instance.logistics.warehouses).not.toBe(null);
    expect(instance.logistics.inventory).not.toBe(null);
    expect(instance.logistics.holidays).not.toBe(null);
    expect(instance.logistics.reservations).not.toBe(null);
    expect(instance.logistics.sla).not.toBe(null);
    expect(instance.logistics.pickupPoints).not.toBe(null);
    expect(instance.logistics.polygons).not.toBe(null);

    expect(instance.pricing).not.toBe(null);
    expect(instance.pricing.priceTables).not.toBe(null);
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
