package shared

type Error struct {
	Doc        *string `json:"doc,omitempty"`
	Error      *string `json:"error,omitempty"`
	Message    *string `json:"message,omitempty"`
	Suggestion *string `json:"suggestion,omitempty"`
}
