import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRoomsRoomIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roomId" })
  roomId: string;
}


export class PostRoomsRoomIdRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXML: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  updateRoom?: shared.UpdateRoom;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object?: Record<string, any>;
}


export class PostRoomsRoomIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRoomsRoomIdPathParams;

  @SpeakeasyMetadata()
  request?: PostRoomsRoomIdRequests;
}


export class PostRoomsRoomIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  room?: shared.Room;

  @SpeakeasyMetadata()
  statusCode: number;
}
