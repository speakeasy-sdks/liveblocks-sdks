package .models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
public class Authorization {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public Authorization withToken(String token) {
        this.token = token;
        return this;
    }
}