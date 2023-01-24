package .models.operations;

import .utils.SpeakeasyMetadata;
public class PostRoomsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public .models.shared.CreateRoom request;
    public PostRoomsRequest withRequest(.models.shared.CreateRoom request) {
        this.request = request;
        return this;
    }
}