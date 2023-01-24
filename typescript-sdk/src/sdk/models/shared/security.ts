import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeAuthorization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Bearer sk_xxx" })
  apiKey: string;
}
