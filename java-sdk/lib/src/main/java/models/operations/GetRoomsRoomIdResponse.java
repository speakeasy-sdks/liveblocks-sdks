package .models.operations;


public class GetRoomsRoomIdResponse {
    public String contentType;
    public GetRoomsRoomIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public .models.shared.Error error;
    public GetRoomsRoomIdResponse withError(.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public .models.shared.Room room;
    public GetRoomsRoomIdResponse withRoom(.models.shared.Room room) {
        this.room = room;
        return this;
    }
    public Long statusCode;
    public GetRoomsRoomIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}