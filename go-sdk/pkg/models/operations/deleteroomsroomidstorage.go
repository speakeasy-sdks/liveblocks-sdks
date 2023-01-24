package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRoomsRoomIDStoragePathParams struct {
	RoomID string `pathParam:"style=simple,explode=false,name=roomId"`
}

type DeleteRoomsRoomIDStorageRequest struct {
	PathParams DeleteRoomsRoomIDStoragePathParams
}

type DeleteRoomsRoomIDStorageResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
