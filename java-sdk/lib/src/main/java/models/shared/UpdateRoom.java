package .models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
public class UpdateRoom {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultAccesses")
    public Object defaultAccesses;
    public UpdateRoom withDefaultAccesses(Object defaultAccesses) {
        this.defaultAccesses = defaultAccesses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupsAccesses")
    public java.util.Map<String, Object> groupsAccesses;
    public UpdateRoom withGroupsAccesses(java.util.Map<String, Object> groupsAccesses) {
        this.groupsAccesses = groupsAccesses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, Object> metadata;
    public UpdateRoom withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usersAccesses")
    public java.util.Map<String, Object> usersAccesses;
    public UpdateRoom withUsersAccesses(java.util.Map<String, Object> usersAccesses) {
        this.usersAccesses = usersAccesses;
        return this;
    }
}