import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAuthorization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupIds" })
  groupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=userInfo" })
  userInfo?: Record<string, any>;
}
