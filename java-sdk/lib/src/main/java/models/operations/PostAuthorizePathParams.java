package .models.operations;

import .utils.SpeakeasyMetadata;
public class PostAuthorizePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roomId")
    public String roomId;
    public PostAuthorizePathParams withRoomId(String roomId) {
        this.roomId = roomId;
        return this;
    }
}