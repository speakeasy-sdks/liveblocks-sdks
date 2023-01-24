package .models.operations;

import .utils.SpeakeasyMetadata;
public class DeleteRoomsRoomIdStoragePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roomId")
    public String roomId;
    public DeleteRoomsRoomIdStoragePathParams withRoomId(String roomId) {
        this.roomId = roomId;
        return this;
    }
}