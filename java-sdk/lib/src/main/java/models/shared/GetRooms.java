package .models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
public class GetRooms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public GetRoomsData[] data;
    public GetRooms withData(GetRoomsData[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetRooms withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
}