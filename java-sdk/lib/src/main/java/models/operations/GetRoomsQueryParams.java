package .models.operations;

import .utils.SpeakeasyMetadata;
public class GetRoomsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupIds")
    public String groupIds;
    public GetRoomsQueryParams withGroupIds(String groupIds) {
        this.groupIds = groupIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Double limit;
    public GetRoomsQueryParams withLimit(Double limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=metadata.KEY")
    public String metadataKEY;
    public GetRoomsQueryParams withMetadataKey(String metadataKEY) {
        this.metadataKEY = metadataKEY;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startingAfter")
    public String startingAfter;
    public GetRoomsQueryParams withStartingAfter(String startingAfter) {
        this.startingAfter = startingAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userId")
    public String userId;
    public GetRoomsQueryParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}