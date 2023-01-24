package .models.operations;

import .utils.SpeakeasyMetadata;
public class PostRoomsRoomIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roomId")
    public String roomId;
    public PostRoomsRoomIdPathParams withRoomId(String roomId) {
        this.roomId = roomId;
        return this;
    }
}