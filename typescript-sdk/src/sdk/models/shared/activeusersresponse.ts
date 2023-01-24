import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActiveUsersResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class ActiveUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ActiveUsersResponseData })
  data?: ActiveUsersResponseData[];
}
