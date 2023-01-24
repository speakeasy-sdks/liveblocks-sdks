import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RoomTypeEnum {
    Room = "room"
}


export class Room extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=defaultAccesses" })
  defaultAccesses?: any;

  @SpeakeasyMetadata({ data: "json, name=groupsAccesses" })
  groupsAccesses?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastConnectionAt" })
  lastConnectionAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: RoomTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=usersAccesses" })
  usersAccesses?: Record<string, any>;
}
