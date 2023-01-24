package shared

type CreateRoom struct {
	DefaultAccesses []string               `json:"defaultAccesses"`
	GroupsAccesses  map[string]interface{} `json:"groupsAccesses,omitempty"`
	ID              string                 `json:"id"`
	Metadata        map[string]interface{} `json:"metadata,omitempty"`
	UsersAccesses   map[string]interface{} `json:"usersAccesses,omitempty"`
}
