package .models.operations;


public class PostRoomsRoomIdResponse {
    public String contentType;
    public PostRoomsRoomIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public .models.shared.Error error;
    public PostRoomsRoomIdResponse withError(.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public .models.shared.Room room;
    public PostRoomsRoomIdResponse withRoom(.models.shared.Room room) {
        this.room = room;
        return this;
    }
    public Long statusCode;
    public PostRoomsRoomIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}