package operations

import (
	"openapi/pkg/models/shared"
)

type PostRoomsRequest struct {
	Request *shared.CreateRoom `request:"mediaType=application/json"`
}

type PostRoomsResponse struct {
	Body        []byte
	ContentType string
	Error       *shared.Error
	Room        *shared.Room
	StatusCode  int64
}
