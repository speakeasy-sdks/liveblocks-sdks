package .models.operations;


public class GetRoomsRequest {
    public GetRoomsQueryParams queryParams;
    public GetRoomsRequest withQueryParams(GetRoomsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}