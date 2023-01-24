package .models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
public class GetRoomsRoomIdStorage200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Object data;
    public GetRoomsRoomIdStorage200ApplicationJson withData(Object data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("liveblocksType")
    public String liveblocksType;
    public GetRoomsRoomIdStorage200ApplicationJson withLiveblocksType(String liveblocksType) {
        this.liveblocksType = liveblocksType;
        return this;
    }
}