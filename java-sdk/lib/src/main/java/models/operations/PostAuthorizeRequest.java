package .models.operations;

import .utils.SpeakeasyMetadata;
public class PostAuthorizeRequest {
    public PostAuthorizePathParams pathParams;
    public PostAuthorizeRequest withPathParams(PostAuthorizePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public .models.shared.CreateAuthorization request;
    public PostAuthorizeRequest withRequest(.models.shared.CreateAuthorization request) {
        this.request = request;
        return this;
    }
}