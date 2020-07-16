import { CreateOrUpdateGiftCardProviderByIdRequest } from "../requests/CreateOrUpdateGiftCardProviderByIdRequest";

interface Self {
  href?: string;
}

export interface ListAllGiftCardProvidersResponseItem
  extends CreateOrUpdateGiftCardProviderByIdRequest {
  id?: string;
  _self?: Self;
}
