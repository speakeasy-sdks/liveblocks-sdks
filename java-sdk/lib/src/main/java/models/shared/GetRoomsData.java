package .models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
public class GetRoomsData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdAt")
    public String createdAt;
    public GetRoomsData withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultAccesses")
    public Object defaultAccesses;
    public GetRoomsData withDefaultAccesses(Object defaultAccesses) {
        this.defaultAccesses = defaultAccesses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupsAccesses")
    public java.util.Map<String, Object> groupsAccesses;
    public GetRoomsData withGroupsAccesses(java.util.Map<String, Object> groupsAccesses) {
        this.groupsAccesses = groupsAccesses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetRoomsData withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastConnectionAt")
    public String lastConnectionAt;
    public GetRoomsData withLastConnectionAt(String lastConnectionAt) {
        this.lastConnectionAt = lastConnectionAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, Object> metadata;
    public GetRoomsData withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GetRoomsData withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usersAccesses")
    public java.util.Map<String, Object> usersAccesses;
    public GetRoomsData withUsersAccesses(java.util.Map<String, Object> usersAccesses) {
        this.usersAccesses = usersAccesses;
        return this;
    }
}