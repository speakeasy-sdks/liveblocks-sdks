package .models.operations;

import .utils.SpeakeasyMetadata;
public class GetRoomsRoomIdStoragePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roomId")
    public String roomId;
    public GetRoomsRoomIdStoragePathParams withRoomId(String roomId) {
        this.roomId = roomId;
        return this;
    }
}