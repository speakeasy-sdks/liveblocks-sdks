package .models.operations;

import .utils.SpeakeasyMetadata;
public class PostPublicAuthorizePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roomId")
    public String roomId;
    public PostPublicAuthorizePathParams withRoomId(String roomId) {
        this.roomId = roomId;
        return this;
    }
}