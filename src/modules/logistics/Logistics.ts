import { VtexHttpClient } from '../../utils/VtexHttpClient';
import { ShippingPolicies } from './apis/shipping-policies';
import { Carriers } from './apis/carriers';
import { Docks } from './apis/docks';
import { Warehouses } from './apis/warehouses';
import { Inventory } from './apis/inventory';
import { Holidays } from './apis/holidays';
import { Reservations } from './apis/reservations';
import { SLA } from './apis/SLA';
import { PickupPoints } from './apis/pickup-points';
import { Polygons } from './apis/polygons';

export class Logistics {
  /**
   * Shipping Policies API
   */
  readonly shippingPolicies: ShippingPolicies;

  /**
   * Carriers API
   */
  readonly carriers: Carriers;

  /**
   * Docks API
   */
  readonly docks: Docks;

  /**
   * Warehouses API
   */
  readonly warehouses: Warehouses;

  /**
   * Inventory API
   */
  readonly inventory: Inventory;

  /**
   * Holidays API
   */
  readonly holidays: Holidays;

  /**
   * Reservations API
   */
  readonly reservations: Reservations;

  /**
   * Pickup Points API
   */
  readonly pickupPoints: PickupPoints;

  /**
   * SLA API
   */
  readonly sla: SLA;

  /**
   * Polygons API
   */
  readonly polygons: Polygons;

  constructor(vtexHttpClient: VtexHttpClient) {
    this.shippingPolicies = new ShippingPolicies(vtexHttpClient);
    this.carriers = new Carriers(vtexHttpClient);
    this.docks = new Docks(vtexHttpClient);
    this.warehouses = new Warehouses(vtexHttpClient);
    this.inventory = new Inventory(vtexHttpClient);
    this.holidays = new Holidays(vtexHttpClient);
    this.reservations = new Reservations(vtexHttpClient);
    this.sla = new SLA(vtexHttpClient);
    this.pickupPoints = new PickupPoints(vtexHttpClient);
    this.polygons = new Polygons(vtexHttpClient);
  }
}
