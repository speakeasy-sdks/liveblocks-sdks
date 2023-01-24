package operations

import (
	"openapi/pkg/models/shared"
)

type PostAuthorizePathParams struct {
	RoomID string `pathParam:"style=simple,explode=false,name=roomId"`
}

type PostAuthorizeRequest struct {
	PathParams PostAuthorizePathParams
	Request    *shared.CreateAuthorization `request:"mediaType=application/json"`
}

type PostAuthorizeResponse struct {
	Authorization *shared.Authorization
	ContentType   string
	Error         *shared.Error
	StatusCode    int64
}
