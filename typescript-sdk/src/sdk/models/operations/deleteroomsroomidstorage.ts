import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteRoomsRoomIdStoragePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roomId" })
  roomId: string;
}


export class DeleteRoomsRoomIdStorageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteRoomsRoomIdStoragePathParams;
}


export class DeleteRoomsRoomIdStorageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}
