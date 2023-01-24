package shared

type CreateAuthorization struct {
	GroupIds []string               `json:"groupIds,omitempty"`
	UserID   *string                `json:"userId,omitempty"`
	UserInfo map[string]interface{} `json:"userInfo,omitempty"`
}
