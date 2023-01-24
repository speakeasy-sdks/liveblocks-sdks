package .models.operations;


public class DeleteRoomsRoomIdStorageResponse {
    public String contentType;
    public DeleteRoomsRoomIdStorageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public .models.shared.Error error;
    public DeleteRoomsRoomIdStorageResponse withError(.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public DeleteRoomsRoomIdStorageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}