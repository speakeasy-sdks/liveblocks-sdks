package operations

import (
	"openapi/pkg/models/shared"
)

type GetRoomsRoomIDStoragePathParams struct {
	RoomID string `pathParam:"style=simple,explode=false,name=roomId"`
}

type GetRoomsRoomIDStorage200ApplicationJSON struct {
	Data           *interface{} `json:"data,omitempty"`
	LiveblocksType *string      `json:"liveblocksType,omitempty"`
}

type GetRoomsRoomIDStorageRequest struct {
	PathParams GetRoomsRoomIDStoragePathParams
}

type GetRoomsRoomIDStorageResponse struct {
	ContentType                                   string
	Error                                         *shared.Error
	StatusCode                                    int64
	GetRoomsRoomIDStorage200ApplicationJSONObject *GetRoomsRoomIDStorage200ApplicationJSON
}
