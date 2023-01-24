package .models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
public class ActiveUsersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ActiveUsersResponseData[] data;
    public ActiveUsersResponse withData(ActiveUsersResponseData[] data) {
        this.data = data;
        return this;
    }
}