package .models.operations;

import .utils.SpeakeasyMetadata;
public class PostRoomsRoomIdStorageRequest {
    public PostRoomsRoomIdStoragePathParams pathParams;
    public PostRoomsRoomIdStorageRequest withPathParams(PostRoomsRoomIdStoragePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostRoomsRoomIdStorageRequestBody request;
    public PostRoomsRoomIdStorageRequest withRequest(PostRoomsRoomIdStorageRequestBody request) {
        this.request = request;
        return this;
    }
}