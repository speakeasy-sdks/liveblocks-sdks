package .models.operations;

import .utils.SpeakeasyMetadata;
public class GetRoomsRoomIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roomId")
    public String roomId;
    public GetRoomsRoomIdPathParams withRoomId(String roomId) {
        this.roomId = roomId;
        return this;
    }
}