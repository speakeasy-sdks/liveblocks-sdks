package .models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
public class CreateAuthorization {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupIds")
    public String[] groupIds;
    public CreateAuthorization withGroupIds(String[] groupIds) {
        this.groupIds = groupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public CreateAuthorization withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userInfo")
    public java.util.Map<String, Object> userInfo;
    public CreateAuthorization withUserInfo(java.util.Map<String, Object> userInfo) {
        this.userInfo = userInfo;
        return this;
    }
}