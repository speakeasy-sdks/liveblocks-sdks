package .models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
public class PublicAuthorizeBodyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicApiKey")
    public String publicApiKey;
    public PublicAuthorizeBodyRequest withPublicApiKey(String publicApiKey) {
        this.publicApiKey = publicApiKey;
        return this;
    }
}