import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRoomsRoomIdActiveUsersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roomId" })
  roomId: string;
}


export class GetRoomsRoomIdActiveUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRoomsRoomIdActiveUsersPathParams;
}


export class GetRoomsRoomIdActiveUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activeUsersResponse?: shared.ActiveUsersResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}
