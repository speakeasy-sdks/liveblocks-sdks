package shared

type ActiveUsersResponseData struct {
	ConnectionID *float64 `json:"connectionId,omitempty"`
	Type         *string  `json:"type,omitempty"`
}

type ActiveUsersResponse struct {
	Data []ActiveUsersResponseData `json:"data,omitempty"`
}
