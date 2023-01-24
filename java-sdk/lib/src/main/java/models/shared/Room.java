package .models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import .utils.DateTimeSerializer;
import .utils.DateTimeDeserializer;
public class Room {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public Room withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultAccesses")
    public Object defaultAccesses;
    public Room withDefaultAccesses(Object defaultAccesses) {
        this.defaultAccesses = defaultAccesses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupsAccesses")
    public java.util.Map<String, Object> groupsAccesses;
    public Room withGroupsAccesses(java.util.Map<String, Object> groupsAccesses) {
        this.groupsAccesses = groupsAccesses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Room withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastConnectionAt")
    public OffsetDateTime lastConnectionAt;
    public Room withLastConnectionAt(OffsetDateTime lastConnectionAt) {
        this.lastConnectionAt = lastConnectionAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public Room withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public RoomTypeEnum type;
    public Room withType(RoomTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usersAccesses")
    public java.util.Map<String, Object> usersAccesses;
    public Room withUsersAccesses(java.util.Map<String, Object> usersAccesses) {
        this.usersAccesses = usersAccesses;
        return this;
    }
}