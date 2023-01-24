package operations

import (
	"openapi/pkg/models/shared"
)

type PostRoomsRoomIDPathParams struct {
	RoomID string `pathParam:"style=simple,explode=false,name=roomId"`
}

type PostRoomsRoomIDRequests struct {
	ApplicationXML []byte                 `request:"mediaType=application/xml"`
	UpdateRoom     *shared.UpdateRoom     `request:"mediaType=application/json"`
	Object         map[string]interface{} `request:"mediaType=multipart/form-data"`
}

type PostRoomsRoomIDRequest struct {
	PathParams PostRoomsRoomIDPathParams
	Request    *PostRoomsRoomIDRequests
}

type PostRoomsRoomIDResponse struct {
	ContentType string
	Error       *shared.Error
	Room        *shared.Room
	StatusCode  int64
}
