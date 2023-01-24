package operations

import (
	"openapi/pkg/models/shared"
)

type GetRoomsRoomIDActiveUsersPathParams struct {
	RoomID string `pathParam:"style=simple,explode=false,name=roomId"`
}

type GetRoomsRoomIDActiveUsersRequest struct {
	PathParams GetRoomsRoomIDActiveUsersPathParams
}

type GetRoomsRoomIDActiveUsersResponse struct {
	ActiveUsersResponse *shared.ActiveUsersResponse
	ContentType         string
	Error               *shared.Error
	StatusCode          int64
}
