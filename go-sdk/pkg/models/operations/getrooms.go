package operations

import (
	"openapi/pkg/models/shared"
)

type GetRoomsQueryParams struct {
	GroupIds      *string  `queryParam:"style=form,explode=true,name=groupIds"`
	Limit         *float64 `queryParam:"style=form,explode=true,name=limit"`
	MetadataKEY   *string  `queryParam:"style=form,explode=true,name=metadata.KEY"`
	StartingAfter *string  `queryParam:"style=form,explode=true,name=startingAfter"`
	UserID        *string  `queryParam:"style=form,explode=true,name=userId"`
}

type GetRoomsRequest struct {
	QueryParams GetRoomsQueryParams
}

type GetRoomsResponse struct {
	ContentType string
	Error       *shared.Error
	GetRooms    *shared.GetRooms
	StatusCode  int64
}
