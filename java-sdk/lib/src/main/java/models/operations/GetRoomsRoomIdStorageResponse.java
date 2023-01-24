package .models.operations;


public class GetRoomsRoomIdStorageResponse {
    public String contentType;
    public GetRoomsRoomIdStorageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public .models.shared.Error error;
    public GetRoomsRoomIdStorageResponse withError(.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetRoomsRoomIdStorageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetRoomsRoomIdStorage200ApplicationJson getRoomsRoomIdStorage200ApplicationJSONObject;
    public GetRoomsRoomIdStorageResponse withGetRoomsRoomIdStorage200ApplicationJsonObject(GetRoomsRoomIdStorage200ApplicationJson getRoomsRoomIdStorage200ApplicationJSONObject) {
        this.getRoomsRoomIdStorage200ApplicationJSONObject = getRoomsRoomIdStorage200ApplicationJSONObject;
        return this;
    }
}