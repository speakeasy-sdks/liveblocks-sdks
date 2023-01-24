import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PublicAuthorizeBodyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=publicApiKey" })
  publicApiKey?: string;
}
