import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRoomsRoomIdStoragePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roomId" })
  roomId: string;
}


export class GetRoomsRoomIdStorage200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: any;

  @SpeakeasyMetadata({ data: "json, name=liveblocksType" })
  liveblocksType?: string;
}


export class GetRoomsRoomIdStorageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRoomsRoomIdStoragePathParams;
}


export class GetRoomsRoomIdStorageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getRoomsRoomIdStorage200ApplicationJSONObject?: GetRoomsRoomIdStorage200ApplicationJson;
}
