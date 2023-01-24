package .models.operations;

import .utils.SpeakeasyMetadata;
public class PostPublicAuthorizeRequest {
    public PostPublicAuthorizePathParams pathParams;
    public PostPublicAuthorizeRequest withPathParams(PostPublicAuthorizePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public .models.shared.PublicAuthorizeBodyRequest request;
    public PostPublicAuthorizeRequest withRequest(.models.shared.PublicAuthorizeBodyRequest request) {
        this.request = request;
        return this;
    }
}