import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostPublicAuthorizePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roomId" })
  roomId: string;
}


export class PostPublicAuthorizeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostPublicAuthorizePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.PublicAuthorizeBodyRequest;
}


export class PostPublicAuthorizeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authorization?: shared.Authorization;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}
