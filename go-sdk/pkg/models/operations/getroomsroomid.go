package operations

import (
	"openapi/pkg/models/shared"
)

type GetRoomsRoomIDPathParams struct {
	RoomID string `pathParam:"style=simple,explode=false,name=roomId"`
}

type GetRoomsRoomIDRequest struct {
	PathParams GetRoomsRoomIDPathParams
}

type GetRoomsRoomIDResponse struct {
	ContentType string
	Error       *shared.Error
	Room        *shared.Room
	StatusCode  int64
}
