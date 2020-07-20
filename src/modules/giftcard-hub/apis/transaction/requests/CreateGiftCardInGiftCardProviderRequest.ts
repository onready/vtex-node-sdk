export interface CreateGiftCardInGiftCardProviderRequest {
  relationName?: string;
  emissionDate?: string;
  expiringDate?: string;
  caption?: string;
  restrictedToOwner?: boolean;
  multipleRedemptions?: boolean;
  multipleCredits?: boolean;
  profileId?: string;
}
