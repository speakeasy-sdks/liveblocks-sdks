package operations

import (
	"openapi/pkg/models/shared"
)

type PostPublicAuthorizePathParams struct {
	RoomID string `pathParam:"style=simple,explode=false,name=roomId"`
}

type PostPublicAuthorizeRequest struct {
	PathParams PostPublicAuthorizePathParams
	Request    *shared.PublicAuthorizeBodyRequest `request:"mediaType=application/json"`
}

type PostPublicAuthorizeResponse struct {
	Authorization *shared.Authorization
	ContentType   string
	Error         *shared.Error
	StatusCode    int64
}
