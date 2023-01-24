package .models.operations;

import .utils.SpeakeasyMetadata;
public class GetRoomsRoomIdActiveUsersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roomId")
    public String roomId;
    public GetRoomsRoomIdActiveUsersPathParams withRoomId(String roomId) {
        this.roomId = roomId;
        return this;
    }
}