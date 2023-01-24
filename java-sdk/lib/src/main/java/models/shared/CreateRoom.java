package .models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
public class CreateRoom {
    @JsonProperty("defaultAccesses")
    public String[] defaultAccesses;
    public CreateRoom withDefaultAccesses(String[] defaultAccesses) {
        this.defaultAccesses = defaultAccesses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupsAccesses")
    public java.util.Map<String, Object> groupsAccesses;
    public CreateRoom withGroupsAccesses(java.util.Map<String, Object> groupsAccesses) {
        this.groupsAccesses = groupsAccesses;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public CreateRoom withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, Object> metadata;
    public CreateRoom withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usersAccesses")
    public java.util.Map<String, Object> usersAccesses;
    public CreateRoom withUsersAccesses(java.util.Map<String, Object> usersAccesses) {
        this.usersAccesses = usersAccesses;
        return this;
    }
}