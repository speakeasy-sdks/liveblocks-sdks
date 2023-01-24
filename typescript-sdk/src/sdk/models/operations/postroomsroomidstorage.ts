import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRoomsRoomIdStoragePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roomId" })
  roomId: string;
}


export class PostRoomsRoomIdStorageRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=liveblocksType" })
  liveblocksType?: string;
}


export class PostRoomsRoomIdStorage200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: any;

  @SpeakeasyMetadata({ data: "json, name=liveblocksType" })
  liveblocksType?: string;
}


export class PostRoomsRoomIdStorageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRoomsRoomIdStoragePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostRoomsRoomIdStorageRequestBody;
}


export class PostRoomsRoomIdStorageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postRoomsRoomIdStorage200ApplicationJSONObject?: PostRoomsRoomIdStorage200ApplicationJson;
}
