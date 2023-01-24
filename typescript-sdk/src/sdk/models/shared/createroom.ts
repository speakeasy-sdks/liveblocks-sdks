import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateRoom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultAccesses" })
  defaultAccesses: string[];

  @SpeakeasyMetadata({ data: "json, name=groupsAccesses" })
  groupsAccesses?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=usersAccesses" })
  usersAccesses?: Record<string, any>;
}
