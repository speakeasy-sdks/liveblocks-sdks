import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRoomsRoomIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roomId" })
  roomId: string;
}


export class GetRoomsRoomIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRoomsRoomIdPathParams;
}


export class GetRoomsRoomIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  room?: shared.Room;

  @SpeakeasyMetadata()
  statusCode: number;
}
