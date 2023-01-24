package shared

type SchemeAuthorization struct {
	APIKey string `security:"name=Bearer sk_xxx"`
}
