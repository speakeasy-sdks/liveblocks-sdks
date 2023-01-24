package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRoomsRoomIDPathParams struct {
	RoomID string `pathParam:"style=simple,explode=false,name=roomId"`
}

type DeleteRoomsRoomIDRequest struct {
	PathParams DeleteRoomsRoomIDPathParams
}

type DeleteRoomsRoomIDResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
