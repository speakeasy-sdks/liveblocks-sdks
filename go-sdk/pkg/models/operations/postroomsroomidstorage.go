package operations

import (
	"openapi/pkg/models/shared"
)

type PostRoomsRoomIDStoragePathParams struct {
	RoomID string `pathParam:"style=simple,explode=false,name=roomId"`
}

type PostRoomsRoomIDStorageRequestBody struct {
	Data           map[string]interface{} `json:"data,omitempty"`
	LiveblocksType *string                `json:"liveblocksType,omitempty"`
}

type PostRoomsRoomIDStorage200ApplicationJSON struct {
	Data           *interface{} `json:"data,omitempty"`
	LiveblocksType *string      `json:"liveblocksType,omitempty"`
}

type PostRoomsRoomIDStorageRequest struct {
	PathParams PostRoomsRoomIDStoragePathParams
	Request    *PostRoomsRoomIDStorageRequestBody `request:"mediaType=application/json"`
}

type PostRoomsRoomIDStorageResponse struct {
	ContentType                                    string
	Error                                          *shared.Error
	StatusCode                                     int64
	PostRoomsRoomIDStorage200ApplicationJSONObject *PostRoomsRoomIDStorage200ApplicationJSON
}
