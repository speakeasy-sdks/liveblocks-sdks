package .models.operations;


public class DeleteRoomsRoomIdResponse {
    public String contentType;
    public DeleteRoomsRoomIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public .models.shared.Error error;
    public DeleteRoomsRoomIdResponse withError(.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public DeleteRoomsRoomIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}