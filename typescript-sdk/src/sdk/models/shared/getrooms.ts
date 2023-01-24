import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRoomsData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultAccesses" })
  defaultAccesses?: any;

  @SpeakeasyMetadata({ data: "json, name=groupsAccesses" })
  groupsAccesses?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastConnectionAt" })
  lastConnectionAt?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=usersAccesses" })
  usersAccesses?: Record<string, any>;
}


export class GetRooms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: GetRoomsData })
  data?: GetRoomsData[];

  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;
}
