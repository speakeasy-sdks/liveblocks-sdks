package .models.operations;


public class PostRoomsRoomIdStorageResponse {
    public String contentType;
    public PostRoomsRoomIdStorageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public .models.shared.Error error;
    public PostRoomsRoomIdStorageResponse withError(.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PostRoomsRoomIdStorageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostRoomsRoomIdStorage200ApplicationJson postRoomsRoomIdStorage200ApplicationJSONObject;
    public PostRoomsRoomIdStorageResponse withPostRoomsRoomIdStorage200ApplicationJsonObject(PostRoomsRoomIdStorage200ApplicationJson postRoomsRoomIdStorage200ApplicationJSONObject) {
        this.postRoomsRoomIdStorage200ApplicationJSONObject = postRoomsRoomIdStorage200ApplicationJSONObject;
        return this;
    }
}