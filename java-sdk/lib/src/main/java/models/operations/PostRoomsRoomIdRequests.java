package .models.operations;

import .utils.SpeakeasyMetadata;
public class PostRoomsRoomIdRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostRoomsRoomIdRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public .models.shared.UpdateRoom updateRoom;
    public PostRoomsRoomIdRequests withUpdateRoom(.models.shared.UpdateRoom updateRoom) {
        this.updateRoom = updateRoom;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public java.util.Map<String, Object> object;
    public PostRoomsRoomIdRequests withObject(java.util.Map<String, Object> object) {
        this.object = object;
        return this;
    }
}