package .models.operations;

import .utils.SpeakeasyMetadata;
public class DeleteRoomsRoomIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roomId")
    public String roomId;
    public DeleteRoomsRoomIdPathParams withRoomId(String roomId) {
        this.roomId = roomId;
        return this;
    }
}