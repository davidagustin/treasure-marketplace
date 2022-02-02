import {
  ListingFieldsWithTokenFragment,
  TokenStandard,
} from "../generated/marketplace.graphql";

export type NormalizedMetadata = Partial<{
  attributes: Array<{
    attribute: Partial<{
      name: string;
      value: string | number;
      percentage: number | null;
    }>;
  }> | null;
  id: string;
  description: string;
  image: string;
  name: string;
}>;

export type targetNftT = {
  metadata: NormalizedMetadata | null;
  payload: ListingFieldsWithTokenFragment & {
    standard: TokenStandard;
    tokenId: string;
  };
};

export type Nft = {
  address: string;
  collection: string;
  listing?: {
    expires: string;
    pricePerItem: string;
    quantity: number;
  };
  name: string;
  total: number;
  standard: TokenStandard;
  source: string;
  tokenId: string;
};
