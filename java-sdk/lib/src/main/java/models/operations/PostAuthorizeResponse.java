package .models.operations;


public class PostAuthorizeResponse {
    public .models.shared.Authorization authorization;
    public PostAuthorizeResponse withAuthorization(.models.shared.Authorization authorization) {
        this.authorization = authorization;
        return this;
    }
    public String contentType;
    public PostAuthorizeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public .models.shared.Error error;
    public PostAuthorizeResponse withError(.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PostAuthorizeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}