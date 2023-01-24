import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAuthorizePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roomId" })
  roomId: string;
}


export class PostAuthorizeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAuthorizePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CreateAuthorization;
}


export class PostAuthorizeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authorization?: shared.Authorization;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}
