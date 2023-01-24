import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Authorization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}
