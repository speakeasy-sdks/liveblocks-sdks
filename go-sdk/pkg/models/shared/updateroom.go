package shared

type UpdateRoom struct {
	DefaultAccesses *interface{}           `json:"defaultAccesses,omitempty"`
	GroupsAccesses  map[string]interface{} `json:"groupsAccesses,omitempty"`
	Metadata        map[string]interface{} `json:"metadata,omitempty"`
	UsersAccesses   map[string]interface{} `json:"usersAccesses,omitempty"`
}
