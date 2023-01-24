package .models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
public class PostRoomsRoomIdStorageRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public java.util.Map<String, Object> data;
    public PostRoomsRoomIdStorageRequestBody withData(java.util.Map<String, Object> data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("liveblocksType")
    public String liveblocksType;
    public PostRoomsRoomIdStorageRequestBody withLiveblocksType(String liveblocksType) {
        this.liveblocksType = liveblocksType;
        return this;
    }
}