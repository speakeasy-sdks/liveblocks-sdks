package shared

import (
	"time"
)

type RoomTypeEnum string

const (
	RoomTypeEnumRoom RoomTypeEnum = "room"
)

type Room struct {
	CreatedAt        *time.Time             `json:"createdAt,omitempty"`
	DefaultAccesses  *interface{}           `json:"defaultAccesses,omitempty"`
	GroupsAccesses   map[string]interface{} `json:"groupsAccesses,omitempty"`
	ID               *string                `json:"id,omitempty"`
	LastConnectionAt *time.Time             `json:"lastConnectionAt,omitempty"`
	Metadata         map[string]string      `json:"metadata,omitempty"`
	Type             *RoomTypeEnum          `json:"type,omitempty"`
	UsersAccesses    map[string]interface{} `json:"usersAccesses,omitempty"`
}
