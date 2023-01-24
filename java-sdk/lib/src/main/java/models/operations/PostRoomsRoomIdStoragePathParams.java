package .models.operations;

import .utils.SpeakeasyMetadata;
public class PostRoomsRoomIdStoragePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roomId")
    public String roomId;
    public PostRoomsRoomIdStoragePathParams withRoomId(String roomId) {
        this.roomId = roomId;
        return this;
    }
}