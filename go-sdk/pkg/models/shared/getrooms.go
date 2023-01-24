package shared

type GetRoomsData struct {
	CreatedAt        *string                `json:"createdAt,omitempty"`
	DefaultAccesses  *interface{}           `json:"defaultAccesses,omitempty"`
	GroupsAccesses   map[string]interface{} `json:"groupsAccesses,omitempty"`
	ID               *string                `json:"id,omitempty"`
	LastConnectionAt *string                `json:"lastConnectionAt,omitempty"`
	Metadata         map[string]interface{} `json:"metadata,omitempty"`
	Type             *string                `json:"type,omitempty"`
	UsersAccesses    map[string]interface{} `json:"usersAccesses,omitempty"`
}

type GetRooms struct {
	Data     []GetRoomsData `json:"data,omitempty"`
	NextPage *string        `json:"nextPage,omitempty"`
}
