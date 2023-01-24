import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateRoom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultAccesses" })
  defaultAccesses?: any;

  @SpeakeasyMetadata({ data: "json, name=groupsAccesses" })
  groupsAccesses?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=usersAccesses" })
  usersAccesses?: Record<string, any>;
}
