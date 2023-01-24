package .models.operations;


public class PostPublicAuthorizeResponse {
    public .models.shared.Authorization authorization;
    public PostPublicAuthorizeResponse withAuthorization(.models.shared.Authorization authorization) {
        this.authorization = authorization;
        return this;
    }
    public String contentType;
    public PostPublicAuthorizeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public .models.shared.Error error;
    public PostPublicAuthorizeResponse withError(.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PostPublicAuthorizeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}