package .models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
public class ActiveUsersResponseData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectionId")
    public Double connectionId;
    public ActiveUsersResponseData withConnectionId(Double connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ActiveUsersResponseData withType(String type) {
        this.type = type;
        return this;
    }
}