import { VTEX } from "../src/VTEX";

describe("VTEX tests", () => {
  const store: string = "store";
  const appKey: string = "appKey";
  const appSecret: string = "appSecret";

  test("Create instance, with all params, creates the instance", () =>
    new Promise((done) => {
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
      expect(instance.pricing.pricesAndFixedPrices).not.toBe(null);
      expect(instance.pricing.pricingConfig).not.toBe(null);

      expect(instance.masterData).not.toBe(null);
      expect(instance.masterData.documents).not.toBe(null);
      expect(instance.masterData.search).not.toBe(null);
      expect(instance.masterData.scroll).not.toBe(null);
      expect(instance.masterData.schemas).not.toBe(null);
      expect(instance.masterData.indices).not.toBe(null);
      expect(instance.masterData.clusters).not.toBe(null);
      expect(instance.masterData.versions).not.toBe(null);

      expect(instance.catalog).not.toBe(null);
      expect(instance.catalog.skuService).not.toBe(null);
      expect(instance.catalog.categoryAndBrand).not.toBe(null);
      expect(instance.catalog.attachment).not.toBe(null);
      expect(instance.catalog.product).not.toBe(null);
      expect(instance.catalog.tradePolicy).not.toBe(null);
      expect(instance.catalog.sku).not.toBe(null);
      expect(instance.catalog.specification).not.toBe(null);
      expect(instance.catalog.collection).not.toBe(null);
      expect(instance.catalog.subcollection).not.toBe(null);
      expect(instance.catalog.supplier).not.toBe(null);
      expect(instance.catalog.salesChannel).not.toBe(null);
      expect(instance.catalog.seller).not.toBe(null);
      expect(instance.catalog.others).not.toBe(null);

      expect(instance.search).not.toBe(null);
      expect(instance.search.crossSelling).not.toBe(null);
      expect(instance.search.search).not.toBe(null);
      expect(instance.search.facets).not.toBe(null);
      expect(instance.search.autocomplete).not.toBe(null);

      expect(instance.paymentsGateway).not.toBe(null);
      expect(instance.paymentsGateway.installments).not.toBe(null);
      done();
    }));

  test("Create instance, with empty store, throws Error", () =>
    new Promise((done) => {
      expect(() => new VTEX("", appKey, appSecret)).toThrowError();
      done();
    }));

  test("Create instance, with empty appKey, throws Error", () =>
    new Promise((done) => {
      expect(() => new VTEX(store, "", appSecret)).toThrowError();
      done();
    }));

  test("Create instance, with empty appToken, throws Error", () =>
    new Promise((done) => {
      expect(() => new VTEX(store, appKey, "")).toThrowError();
      done();
    }));
});
