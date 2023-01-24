package .models.operations;


public class GetRoomsResponse {
    public String contentType;
    public GetRoomsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public .models.shared.Error error;
    public GetRoomsResponse withError(.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public .models.shared.GetRooms getRooms;
    public GetRoomsResponse withGetRooms(.models.shared.GetRooms getRooms) {
        this.getRooms = getRooms;
        return this;
    }
    public Long statusCode;
    public GetRoomsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}